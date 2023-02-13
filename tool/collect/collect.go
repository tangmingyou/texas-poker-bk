package collect

func In[T comparable](value T, values ...T) bool {
	for _, v := range values {
		if value == v {
			return true
		}
	}
	return false
}

func Count[T any](slice []T, isCount func(int, T) bool) int {
	count := 0
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
