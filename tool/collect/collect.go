package collect

func In[T comparable](value T, values ...T) bool {
	if values == nil || len(values) == 0 {
		return false
	}
	for _, v := range values {
		if value == v {
			return true
		}
	}
	return false
}

func NotIn[T comparable](value T, values ...T) bool {
	return !In(value, values...)
}

func Count[T any](slice []T, isCount func(int, T) bool) int {
	count := 0
	if slice == nil {
		return count
	}
	for i, item := range slice {
		if isCount(i, item) {
			count++
		}
	}
	return count
}

func Filter[T any](slice []T, predicate func(int, T) bool) []T {
	var res []T
	for i, item := range slice {
		if predicate(i, item) {
			res = append(res, item)
		}
	}
	return res
}

// Tail 获取切片尾部元素
// dv: 空切片默认值
func Tail[T any](slice []T, dv T) T {
	if slice == nil || len(slice) == 0 {
		return dv
	}
	return slice[len(slice)-1]
}

func MapValues[K comparable, V any](kvs map[K]V) []V {
	var values []V
	if kvs == nil || len(kvs) == 0 {
		return values
	}
	for _, v := range kvs {
		values = append(values, v)
	}
	return values
}

func Sum[T int32 | int64 | int](nums []T) T {
	var sum T = 0
	for _, num := range nums {
		sum += num
	}
	return sum
}

func Max[T int32 | int64 | int](nums []T, dv T) T {
	if nums == nil || len(nums) == 0 {
		return dv
	}
	var max T = nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i] > max {
			max = nums[i]
		}
	}
	return max
}

// Combination 列出切片的所有count个元素组合情况
func Combination[T any](origin []T, count int, consumer func(once []T)) {
	if count > len(origin) {
		return
	}
	temp := make([]T, count)
	combination0(origin, 0, count, temp, consumer)
}

// combination0
func combination0[T any](arr []T, start int, count int, temp []T, consumer func(once []T)) {
	if count == 0 {
		consumer(temp)
		return
	}

	for i := start; i < len(arr); i++ {
		temp[len(temp)-count] = arr[i] // 对于每个组合，按照索引大小，先取第一个，此时要取的个数减 1，
		combination0(arr, i+1, count-1, temp, consumer)
	}
}
