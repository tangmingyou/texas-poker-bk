package collect

import (
	"fmt"
	"github.com/emirpasic/gods/maps/treemap"
	"runtime/debug"
	"sync"
	"sync/atomic"
	"time"
)

// DelayQueue key: int64(64bit) = 1(0固定值)+41(ms)+22(index)
type DelayQueue[T any] struct {
	taskQueueMap   *treemap.Map
	lock           *sync.RWMutex
	offsetMs       int64
	handler        func(data T, now time.Time)
	supplying      *atomic.Bool
	consumeChannel chan []T
}

func NewDelayQueue[T any](handler func(data T, now time.Time)) *DelayQueue[T] {
	q := &DelayQueue[T]{}
	q.taskQueueMap = treemap.NewWithIntComparator()
	q.lock = &sync.RWMutex{}
	q.offsetMs = time.Date(2020, 1, 1, 0, 0, 0, 0, time.UTC).UnixMilli()
	q.handler = handler
	q.supplying = &atomic.Bool{}
	q.consumeChannel = make(chan []T, 32)

	// 开启生产者轮训
	q.supplier()
	// 开启消费者
	go func() {
		for {
			values := <-q.consumeChannel
			if IsEmptySlice(values) {
				continue
			}
			for _, data := range values {
				func() {
					defer func() {
						if err := recover(); err != nil {
							fmt.Printf("consumer handler error: %v \n", err)
							// 输出堆栈信息
							fmt.Println(string(debug.Stack()))
						}
					}()
					q.handler(data, time.Now())
				}()
			}
		}
	}()
	return q
}

// supplier 定时开始检查
func (q *DelayQueue[T]) supplier() {
	// 正在轮训中...
	if !q.supplying.CompareAndSwap(false, true) {
		return
	}
	go func() {
		for {
			now := <-time.After(time.Millisecond * 100)
			_, queue := q.next(now.UnixMilli())
			if IsEmptySlice(queue) {
				continue
			}
			q.consumeChannel <- queue
			// 没元素了,停下
			if q.taskQueueMap.Size() == 0 {
				q.supplying.Store(false)
				break
			}
		}
	}()
}

// next 寻找下一个已到时间的任务数据
func (q *DelayQueue[T]) next(nowMs int64) (int64, []T) {
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
	return int64(ms), v.([]T)
}

// Add 添加任务
func (q *DelayQueue[T]) Add(after time.Duration, data T) int64 {
	ms := time.Now().UnixMilli() + after.Milliseconds()
	q.lock.Lock()
	defer q.lock.Unlock()
	val, found := q.taskQueueMap.Get(int(ms))
	if !found {
		q.taskQueueMap.Put(int(ms), []T{data})
		return q.genKey(ms, 0)
	}
	values := val.([]T)
	q.taskQueueMap.Put(int(ms), append(values, data))
	// 通知生产者goroutine轮训数据
	q.supplier()
	return q.genKey(ms, len(values))
}

// Cancel 取消任务
func (q *DelayQueue[T]) Cancel(key int64) {
	ms, index := q.parseKey(key)
	v, found := q.taskQueueMap.Get(int(ms))
	if !found {
		return
	}
	values := v.([]T)
	if IsEmptySlice(values) || len(values) <= index {
		return
	}
	var newValues []T
	q.lock.Lock()
	defer q.lock.Unlock()
	// 只一个任务直接干掉
	if len(values) == 1 {
		q.taskQueueMap.Remove(int(ms))
		return
	}
	// 过滤掉要取消的任务
	newValues = Filter(values, func(i int, _ T) bool {
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
