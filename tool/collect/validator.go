package collect

// IsEmptySlice 切片是否为空
func IsEmptySlice[T any](slice []T) bool {
	return slice == nil || len(slice) == 0
}

func IsNotEmptySlice[T any](slice []T) bool {
	return !IsEmptySlice(slice)
}

func IsEmptyMap[K comparable, V any](kvs map[K]V) bool {
	return kvs == nil || len(kvs) == 0
}
