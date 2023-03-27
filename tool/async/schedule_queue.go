package async

import "time"

type ScheduleQueue[T any] struct {
	delayer *DelayQueue[T]
}

func NewScheduleQueue[T any](checkInterval time.Duration, buffer int, handler func(data T, now time.Time) T) *ScheduleQueue[T] {
	delayer := NewDelayQueue[T](checkInterval, buffer, nil)
	delayer.handler = handler
	return &ScheduleQueue[T]{delayer: delayer}
}

// Schedule scheduleWithFixedDelay 定时执行任务
func (q *ScheduleQueue[T]) Schedule(after time.Duration, data T) *Canceler[T] {
	return q.delayer.schedule0(true, after, data, nil)
}
