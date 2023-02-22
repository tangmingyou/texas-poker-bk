package game

import (
	"errors"
	"math"
	"strconv"
)

// Hand 5张牌的牌型
type Hand struct {
	cards    [5]*Card // 组合牌型
	point    int      // 组合牌型点数
	CardType CardType // 组合牌型名称
}

func (h *Hand) Init(cards [5]*Card) *Hand {
	SortCards(&cards)
	// 牌型排序降序
	face := GetCardFace(&cards) // TODO 牌权重排序
	// 计算牌型
	switch true {
	case isRoyalFlush(cards):
		h.CardType = RoyalFlush
	case isStraightFlush(cards):
		h.CardType = StraightFlush
	case isFourOfKind(face):
		h.CardType = FourOfKind
	case isFullHouse(face):
		h.CardType = FullHouse
	case isFlush(cards):
		h.CardType = Flush
	case isStraight(cards):
		h.CardType = Straight
	case isThreeOfKind(face):
		h.CardType = ThreeOfKind
	case isTwoPairs(face):
		h.CardType = TwoPairs
	case isOnePair(face):
		h.CardType = OnePair
	default:
		h.CardType = HighCard
	}
	h.cards = cards
	// 计算牌点数
	h.point = int(h.CardType) + getHighCardPoint(cards)
	return h
}

func (h *Hand) GetPoint() int {
	return h.point
}

type CardType int

func (ct CardType) String() string {
	return ct.NameZh()
}

func (ct CardType) Name() string {
	f, _ := strconv.ParseFloat(strconv.Itoa(int(ct)>>13), 32)
	return cardTypeNames[int(math.Log2(f))]
}

func (ct CardType) NameZh() string {
	f, _ := strconv.ParseFloat(strconv.Itoa(int(ct)>>13), 32)
	return cardTypeZhNames[int(math.Log2(f))]
}

var cardTypeNames = []string{"HighCard", "OnePair", "TwoPairs", "ThreeOfKind", "Straight", "Flush", "FullHouse", "FourOfKind", "StraightFlush", "RoyalFlush"}
var cardTypeZhNames = []string{"散牌", "对子", "两对", "三条", "顺子", "同花", "葫芦", "四条", "同花顺", "皇家同花顺"}

const (
	HighCard      CardType = 1 << 13 << iota // 高牌
	OnePair       CardType = 1 << 13 << iota // 对子
	TwoPairs      CardType = 1 << 13 << iota // 两对
	ThreeOfKind   CardType = 1 << 13 << iota // 三张
	Straight      CardType = 1 << 13 << iota // 顺子
	Flush         CardType = 1 << 13 << iota // 同花
	FullHouse     CardType = 1 << 13 << iota // 葫芦
	FourOfKind    CardType = 1 << 13 << iota // 四条
	StraightFlush CardType = 1 << 13 << iota // 同花顺
	RoyalFlush    CardType = 1 << 13 << iota // 皇家同花顺
)

// AnalyzeMaxHand 分析牌型，选出5张最大牌
func AnalyzeMaxHand(handCards [2]*Card, publicCards [5]*Card) (*Hand, error) {
	// 计算牌的组合
	var allCards = make([]*Card, 0, 7)
	for _, hc := range handCards {
		if hc != nil {
			allCards = append(allCards, hc)
		}
	}
	for _, pc := range publicCards {
		if pc != nil {
			allCards = append(allCards, pc)
		}
	}
	if len(allCards) < 5 {
		return nil, errors.New("all cards count less 5")
	}

	var cards [5]*Card // 选出的5张牌

	// 只能组合一手牌
	if len(allCards) == 5 {
		copy(cards[:], allCards)
		return new(Hand).Init(cards), nil
	}
	// 查找最大分数组合
	cardsLen := len(allCards)
	tempCards := [5]*Card{}
	var maxHand *Hand
	// 遍历和公共牌的所有组合
	for i := 0; i < cardsLen; i++ {
		tempCards[0] = allCards[i]
		for j := i + 1; j < cardsLen; j++ {
			tempCards[1] = allCards[j]
			for k := j + 1; k < cardsLen; k++ {
				tempCards[2] = allCards[k]
				for m := k + 1; m < cardsLen; m++ {
					tempCards[3] = allCards[m]
					for n := m + 1; n < cardsLen; n++ {
						tempCards[4] = allCards[n]
						tempHand := new(Hand).Init(tempCards)
						if maxHand == nil || tempHand.point > maxHand.point {
							maxHand = tempHand
						}
					}
				}
			}
		}
	}
	return maxHand, nil
}

// SortCards 5张牌降序排序
func SortCards(cards *[5]*Card) {
	for i := 0; i < len(cards); i++ {
		for j := i + 1; j < len(cards); j++ {
			if cards[i].Compare(cards[j]) < 0 {
				cards[i], cards[j] = cards[j], cards[i]
			}
		}
	}
}

// GetCardFace 分析相同点数的牌个数
// return 0:单牌个数 1:对子个数 2:三条个数 3四条个数
func GetCardFace(cards *[5]*Card) [4]int {
	var faceMap = make(map[PokerDot]int, 5)
	for _, c := range cards {
		faceMap[c.Dot]++
	}
	// 0:单牌个数 1:对子个数 2:三条个数 3四条个数 TODO 将对子三条四条排序到前面
	var face = [4]int{}
	for dot := range faceMap {
		face[faceMap[dot]-1]++
	}
	return face
}

// isRoyalFlush 皇家同花顺
func isRoyalFlush(cards [5]*Card) bool {
	return PokerA == cards[0].Dot && isStraight(cards) && isFlush(cards)
}

// isStraightFlush 同花顺
func isStraightFlush(cards [5]*Card) bool {
	return isStraight(cards) && isFlush(cards)
}

// isFourOfKind 四条
func isFourOfKind(face [4]int) bool {
	return face[3] > 0
}

// isFullHouse 葫芦, 3条加2对
func isFullHouse(face [4]int) bool {
	return face[2] > 0 && face[1] > 0
}

// isFlush 同花
func isFlush(cards [5]*Card) bool {
	firstSuit := cards[0].Suit // 首张牌花色
	// 判断花色是否都相同
	for i := 1; i < len(cards); i++ {
		if firstSuit != cards[i].Suit {
			return false
		}
	}
	return true
}

// isStraight 顺子
func isStraight(cards [5]*Card) bool {
	var value int64
	// 000111110000000
	for _, c := range cards {
		value |= 1 << int64(c.Dot)
	}
	// 是顺子 00011111 == 31
	return value>>cards[len(cards)-1].Dot == 31
}

// isThreeOfKind 三条
func isThreeOfKind(face [4]int) bool {
	return face[2] > 0
}

// isTwoPairs 两对
func isTwoPairs(face [4]int) bool {
	return face[1] >= 2
}

// isOnePair 对子
func isOnePair(face [4]int) bool {
	return face[1] > 0
}

// getHighCardPoint 高牌,返回散牌点数
// max = 4432 = 13<<8 + 13<<6 + 13<<4 + 13<<2 + 12
// example: (1<<8 + 1<<6 + 13<<4)对2+A < (2<<8 + 2<<6 + 1<<4)对3+2
func getHighCardPoint(cards [5]*Card) int {
	totalPoint := 0
	for i, c := range cards {
		// 牌权重降序
		totalPoint += int(c.Dot+1) << (8 - i*2)
	}
	return totalPoint
}
