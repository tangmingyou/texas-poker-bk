package game

import (
	"math/rand"
)

// Dealer 发牌员, 有打乱的一副牌
type Dealer struct {
	// 一副牌
	// cardList *collect.LinkedList[Card]
	cards []*Card
	index int
}

func (d *Dealer) Init() *Dealer {
	d.index = 0
	d.cards = make([]*Card, 52)
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
	card := d.cards[d.index]
	d.index++
	return card
}

// disorder 洗牌
func disorder(cards []*Card) {
	length := len(cards)
	// 洗13次
	for i := 0; i < 13; i++ {
		for j := 0; j < length; j++ {
			repIdx := rand.Intn(length)
			cards[i], cards[repIdx] = cards[repIdx], cards[i]
		}
	}
}

func NewDealer() *Dealer {
	return new(Dealer).Init()
}
