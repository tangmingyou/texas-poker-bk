package watcher

import (
	"time"
)

type Event[P any, T any] struct {
	Publisher P
	Payload   T
	UnixMilli int64
}

type Watcher[P any, T any] struct {
	events  chan *Event[P, T]
	stop    chan bool
	handler func(event *Event[P, T])
}

func NewWatcher[P any, T any](buffer int, handler func(event *Event[P, T])) *Watcher[P, T] {
	return &Watcher[P, T]{
		events:  make(chan *Event[P, T], buffer),
		stop:    make(chan bool),
		handler: handler,
	}
}

func (w *Watcher[P, T]) Run() {
	for {
		select {
		case e := <-w.events:
			w.handler(e)
		case <-w.stop:
			return
		}
	}
}

func (w *Watcher[P, T]) Stop() {
	w.stop <- true
}

func (w *Watcher[P, T]) Publish(publisher P, event T) {
	e := &Event[P, T]{publisher, event, time.Now().UnixMilli()}
	go func() {
		w.events <- e
	}()
}
