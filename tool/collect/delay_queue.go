package collect

import (
	"fmt"
	"github.com/emirpasic/gods/maps/treemap"
	"sync"
	"time"
)

// DelayQueue key: int64(64bit) = 1(0固定值)+41(ms)+22(index)
type DelayQueue[T any] struct {
	taskQueueMap *treemap.Map
	lock         *sync.RWMutex
	offsetMs     int64
}

func NewDelayQueue[T any](handler func(data T)) {
	q := &DelayQueue[T]{}
	q.taskQueueMap = treemap.NewWithIntComparator()
	q.lock = &sync.RWMutex{}
	q.offsetMs = time.Date(2020, 1, 1, 0, 0, 0, 0, time.UTC).UnixMilli()

}

func (q *DelayQueue[T]) Add(after time.Duration, data T) int64 {
	ms := time.Now().UnixMilli() + after.Milliseconds()
	q.lock.Lock()
	defer q.lock.Unlock()
	val, found := q.taskQueueMap.Get(ms)
	if !found {
		q.taskQueueMap.Put(ms, []T{data})
		return ms
	}
	q.taskQueueMap.Put(ms, append(val.([]T), data))
	return 1
}

func (q *DelayQueue[T]) genKey(ms int64, index int) int64 {
	key := (ms-q.offsetMs)<<22 + int64(index)
	return key
}

func parseKey(key int64) (int64, int) {
	fmt.Println(key >> 22)
	fmt.Println(key << 42 >> 42)
	return 0, 0
}
