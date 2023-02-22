package game

import (
	"fmt"
	"texas-poker-bk/tool/strings"
)

type Card struct {
	Dot  PokerDot  // 点数
	Suit PokerSuit // 花色
}

func (c *Card) String() string {
	return fmt.Sprintf("{%s %s}", strings.FullLeft(c.Dot.String(), 2, " "), c.Suit.Pattern())
}

// Compare 比较点数和花色
// return (-n: c < c2); (0: c == c2); (+n: c > c2)
func (c *Card) Compare(c2 *Card) int {
	dot, suit := int(c.Dot)-int(c2.Dot), int(c.Suit)-int(c2.Suit)
	return dot*10 + suit
}

// CompareWithDot 只比较点数
// return (-n: c < c2); (0: c == c2); (+n: c > c2)
func (c *Card) CompareWithDot(c2 *Card) int {
	return int(c.Dot) - int(c2.Dot)
}

type PokerSuit int32

func (c PokerSuit) String() string {
	return colors[c]
}

func (c PokerSuit) Pattern() string {
	return cardPatterns[c]
}

// 常量在编译期就要确定值，只能将一些基本类型声明为常量
var colors = [4]string{"diamond", "club", "heart", "spade"}
var cardPatterns = [4]string{"♦", "♣", "♥", "♠"}
var CardColors = [4]string{"D", "C", "H", "S"}

const (
	Diamond PokerSuit = iota // 方块
	Club    PokerSuit = iota // 梅花
	Heart   PokerSuit = iota // 红桃
	Spade   PokerSuit = iota // 黑桃
)

type PokerDot int32

func (n PokerDot) String() string {
	return pokers[n]
}

var pokers = [13]string{"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"}

const (
	Poker2          PokerDot = iota
	Poker3          PokerDot = iota
	Poker4          PokerDot = iota
	Poker5          PokerDot = iota
	Poker6          PokerDot = iota
	Poker7          PokerDot = iota
	Poker8          PokerDot = iota
	Poker9          PokerDot = iota
	Poker10         PokerDot = iota
	PokerJ          PokerDot = iota
	PokerQ          PokerDot = iota
	PokerK          PokerDot = iota
	PokerA          PokerDot = iota
	PokerBlackJoker PokerDot = iota
	PokerRedJoker   PokerDot = iota
)
