package async

import (
	"fmt"
	"github.com/emirpasic/gods/maps/treemap"
	"runtime/debug"
	"sync"
	"sync/atomic"
	"texas-poker-bk/tool/collect"
	"time"
)

type delayTask[T any] struct {
	delay    time.Duration
	infinity bool // 反复执行
	data     T
	canceler *Canceler[T]
}

type Canceler[T any] struct {
	canceled  bool
	cancelKey int64
	delayer   *DelayQueue[T]
}

func (c *Canceler[T]) Cancel() {
	c.delayer.cancel0(c.cancelKey)
	c.canceled = true
}

// 22位index最大值,超过影响精度
const (
	momentMaxConcurrent int = 1 << 22
)

// DelayQueue key: int64(64bit) = 1(0固定值)+41(ms)+22(index)
type DelayQueue[T any] struct {
	taskQueueMap  *treemap.Map
	lock          *sync.Mutex
	offsetMs      int64
	checkInterval time.Duration
	handler       func(data T, now time.Time) (nextData T) // nextData用作scheduler下次执行时参数
	supplying     *atomic.Bool
	readyChannel  chan []*delayTask[T]
}

func NewDelayQueue[T any](checkInterval time.Duration, buffer int, handler func(T, time.Time)) *DelayQueue[T] {
	q := &DelayQueue[T]{}
	q.taskQueueMap = treemap.NewWithIntComparator()
	q.lock = &sync.Mutex{}
	q.offsetMs = time.Date(2020, 1, 1, 0, 0, 0, 0, time.UTC).UnixMilli()
	q.checkInterval = checkInterval
	q.handler = func(data T, now time.Time) (zero T) {
		handler(data, now)
		return zero
	}
	q.supplying = &atomic.Bool{}
	q.readyChannel = make(chan []*delayTask[T], buffer)

	// 开启生产者轮训
	q.goSupplier()
	// 开启消费者
	go q.consumer()

	return q
}

func (q *DelayQueue[T]) consumer() {
	for {
		values := <-q.readyChannel
		if collect.IsEmptySlice(values) {
			continue
		}
		for _, data := range values {
			go func(task *delayTask[T]) {
				nextData := task.data
				if task.infinity {
					// 再次放入延迟执行队列
					defer func() {
						if !task.canceler.canceled {
							q.schedule0(true, task.delay, nextData, task.canceler)
						}
					}()
				}
				defer func() {
					if err := recover(); err != nil {
						fmt.Printf("consumer handler error: %v \n", err)
						// 输出堆栈信息
						fmt.Println(string(debug.Stack()))
					}
				}()
				nextData = q.handler(task.data, time.Now())
			}(data)
		}
	}
}

// goSupplier 定时开始检查
func (q *DelayQueue[T]) goSupplier() {
	// 正在轮训中...
	if !q.supplying.CompareAndSwap(false, true) {
		return
	}
	go func() {
		for {
			now := <-time.After(q.checkInterval)
			_, queue := q.next(now.UnixMilli())
			if collect.IsEmptySlice(queue) {
				continue
			}
			q.readyChannel <- queue
			// 没元素了,停下
			if q.taskQueueMap.Size() == 0 {
				q.supplying.Store(false)
				break
			}
		}
	}()
}

// next 寻找下一个已到时间的任务数据
func (q *DelayQueue[T]) next(nowMs int64) (int64, []*delayTask[T]) {
	k, v := q.taskQueueMap.Min()
	if k == nil {
		return 0, nil
	}
	ms := k.(int)
	//fmt.Println("k", k, "now", nowMs)
	if int64(ms) > nowMs {
		// 还没到时间
		return 0, nil
	}
	q.lock.Lock()
	defer q.lock.Unlock()
	q.taskQueueMap.Remove(int(ms))
	return int64(ms), v.([]*delayTask[T])
}

// Delay 添加一个延迟执行的任务
func (q *DelayQueue[T]) Delay(after time.Duration, data T) *Canceler[T] {
	return q.schedule0(false, after, data, nil)
}

// Delay 添加一个延迟执行的任务
// canceler: 首次执行传nil，多次执行时传第一次返回值
func (q *DelayQueue[T]) schedule0(infinity bool, after time.Duration, data T, canceler *Canceler[T]) *Canceler[T] {
	ms := time.Now().UnixMilli() + after.Milliseconds()
	// 通知生产者goroutine轮询数据
	defer q.goSupplier()

	q.lock.Lock()
	defer q.lock.Unlock()

	if canceler == nil {
		canceler = &Canceler[T]{canceled: false, delayer: q}
	}
	// 该ms无任务,新建
	val, found := q.taskQueueMap.Get(int(ms))
	if !found {
		canceler.cancelKey = q.genKey(ms, 0)
		q.taskQueueMap.Put(int(ms), []*delayTask[T]{
			{delay: after, infinity: infinity, data: data, canceler: canceler},
		})
		return canceler
	}
	// 该ms已有任务, 追加
	values := val.([]*delayTask[T])
	if momentMaxConcurrent <= len(values) {
		// 超过cancel key精度
		panic(fmt.Sprintf("in 1ms max concurrent tasks %d.", momentMaxConcurrent))
	}
	q.taskQueueMap.Put(int(ms), append(values, &delayTask[T]{
		delay: after, infinity: infinity, data: data, canceler: canceler,
	}))
	canceler.cancelKey = q.genKey(ms, len(values))
	return canceler
}

// cancel0 取消任务
func (q *DelayQueue[T]) cancel0(key int64) {
	ms, index := q.parseKey(key)
	v, found := q.taskQueueMap.Get(int(ms))
	if !found {
		return
	}
	values := v.([]*delayTask[T])
	if collect.IsEmptySlice(values) || len(values) <= index {
		return
	}
	var newValues []*delayTask[T]
	q.lock.Lock()
	defer q.lock.Unlock()
	// 只一个任务直接干掉
	if len(values) == 1 {
		q.taskQueueMap.Remove(int(ms))
		return
	}
	// 过滤掉要取消的任务
	newValues = collect.Filter(values, func(i int, _ *delayTask[T]) bool {
		return i != index
	})
	q.taskQueueMap.Put(int(ms), newValues)
}

func (q *DelayQueue[T]) genKey(ms int64, index int) int64 {
	key := (ms-q.offsetMs)<<22 + int64(index)
	return key
}

func (q *DelayQueue[T]) parseKey(key int64) (int64, int) {
	return key>>22 + q.offsetMs, int(key << 42 >> 42)
}
