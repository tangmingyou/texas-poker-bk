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
	//hand := [2]*game.Card{
	//	{Dot: game.PokerK, Suit: game.Diamond},
	//	{Dot: game.Poker10, Suit: game.Heart},
	//}
	//public := [5]*game.Card{
	//	{Dot: game.Poker4, Suit: game.Diamond},
	//	{Dot: game.Poker9, Suit: game.Club},
	//	{Dot: game.PokerJ, Suit: game.Diamond},
	//	{Dot: game.Poker2, Suit: game.Diamond},
	//	{Dot: game.Poker2, Suit: game.Spade},
	//}
	//maxHand, err := game.AnalyzeMaxHand(hand, public)
	//fmt.Println(err, maxHand)

}
