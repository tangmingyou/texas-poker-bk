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
