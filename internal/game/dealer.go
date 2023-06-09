package game

import (
	"math/rand"
	"sync"
)

// Dealer 发牌员, 有打乱的一副牌
type Dealer struct {
	// 一副牌
	// cardList *collect.LinkedList[Card]
	cards []*Card
	index int
	lock  *sync.Mutex
}

func NewDealer() *Dealer {
	return &Dealer{
		cards: make([]*Card, 52),
		index: 0,
		lock:  new(sync.Mutex),
	}
}

func (d *Dealer) Init() *Dealer {
	d.lock.Lock()
	defer d.lock.Unlock()

	d.index = 0
	// 初始化一副牌，13张牌
	for i := 0; i < 13; i++ {
		// 4 种花色
		for j := 0; j < 4; j++ {
			d.cards[i*4+j] = &Card{PokerDot(i), PokerSuit(j)}
		}
	}
	// 洗牌
	disorder(d.cards)
	return d
}

// Deal 发牌堆第一张牌
func (d *Dealer) Deal() *Card {
	d.lock.Lock()
	defer d.lock.Unlock()

	card := d.cards[d.index]
	d.index++
	return card
}

// disorder 乱序洗牌
func disorder(cards []*Card) {
	length := len(cards)
	// 洗52次
	for i := 0; i < length; i++ {
		for j := 0; j < length; j++ {
			repIdx := (rand.Intn(length) + rand.Intn(length)) / 2
			cards[j], cards[repIdx] = cards[repIdx], cards[j]
		}
	}
}
