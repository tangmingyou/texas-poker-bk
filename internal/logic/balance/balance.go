package balance

import (
	"github.com/emirpasic/gods/maps/treemap"
	"sync"
	"sync/atomic"
	"texas-poker-bk/internal/dao"
	"texas-poker-bk/internal/model/entity"
	"texas-poker-bk/tool/async"
)

var (
	AsyncPersist *balancePersist
)

func init() {
	AsyncPersist = &balancePersist{}
	AsyncPersist.init()
}

// balancePersist 账户金额持久化
// TODO Persist() 先写log文件后return, 宕机后从log文件恢复
type balancePersist struct {
	// 待持久化用户id列表
	// idQueue []int32
	consuming *atomic.Bool
	counter   *atomic.Int64
	idQueue   *treemap.Map
	// accountBalance 存储账户最新金额
	//accountBalance *cache.Cache
	balanceMap map[int64]int32
	executor   *async.ConcurrentLimiter
	lock       *sync.RWMutex
}

func (b *balancePersist) init() {
	b.consuming = &atomic.Bool{}
	b.counter = &atomic.Int64{}
	b.idQueue = treemap.NewWithIntComparator()
	//b.accountBalance = cache.New(cache.DefaultExpiration, cache.DefaultExpiration)
	b.balanceMap = make(map[int64]int32, 64)
	b.executor = async.NewConcurrentLimiter(8, 32)
	b.lock = &sync.RWMutex{}
}

func (b *balancePersist) goConsumer() {
	if !b.consuming.CompareAndSwap(false, true) {
		return
	}
	go func() {
		for {
			accountId, balance := b.next()
			if accountId == -1 {
				b.consuming.Store(false)
				return
			}
			b.executor.Run(func() {
				dao.UserDao.DB.Model(&entity.User{}).
					Where("id = ?", accountId).
					Update("balance", balance)
			})
		}
	}()
}

func (b *balancePersist) Persist(accountId int64, balance int32) {
	defer b.goConsumer()
	b.lock.Lock()
	defer b.lock.Unlock()

	b.idQueue.Put(int(b.counter.Add(1)), accountId)
	b.balanceMap[accountId] = balance
}

func (b *balancePersist) next() (int64, int32) {
	b.lock.Lock()
	defer b.lock.Unlock()

	k, id := b.idQueue.Min()
	if k == 0 || k == nil {
		return -1, -1
	}
	accountId, ok := id.(int64)
	if !ok {
		return -1, -1
	}
	balance, ok := b.balanceMap[accountId]
	if !ok {
		return -1, -1
	}
	b.idQueue.Remove(k)
	delete(b.balanceMap, accountId)
	return accountId, balance
}
