package main

import (
	"fmt"
	"math/rand"
	"texas-poker-bk/internal/conf"
	"texas-poker-bk/internal/server"
	"time"
)

func startServer() {
	// TODO 真随机数 crypto/rand
	rand.Seed(time.Now().UnixNano())

	httpServer := server.NewServer()
	err := httpServer.Run(fmt.Sprintf(":%d", conf.Conf.Http.Port))
	if err != nil {
		panic(err)
	}
}

func main() {
	startServer()

	//public := [5]*game.Card{
	//	{Dot: game.Poker10, Suit: game.Club},
	//	{Dot: game.Poker6, Suit: game.Spade},
	//	{Dot: game.Poker7, Suit: game.Diamond},
	//	{Dot: game.Poker5, Suit: game.Heart},
	//	{Dot: game.PokerK, Suit: game.Diamond},
	//}
	//h1 := [2]*game.Card{
	//	{Dot: game.PokerA, Suit: game.Spade},
	//	{Dot: game.Poker5, Suit: game.Spade},
	//}
	//h2 := [2]*game.Card{
	//	{Dot: game.Poker6, Suit: game.Club},
	//	{Dot: game.Poker3, Suit: game.Diamond},
	//}
	//h3 := [2]*game.Card{
	//	{Dot: game.Poker9, Suit: game.Club},
	//	{Dot: game.Poker10, Suit: game.Heart},
	//}
	//hand1, err := game.AnalyzeMaxHand(h1, public)
	//hand2, err := game.AnalyzeMaxHand(h2, public)
	//hand3, err := game.AnalyzeMaxHand(h3, public)
	//fmt.Println(err, hand1)
	//fmt.Println(err, hand2)
	//fmt.Println(err, hand3)

}
