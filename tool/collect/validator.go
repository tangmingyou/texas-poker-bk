package collect

// IsEmptySlice 切片是否为空
func IsEmptySlice[T any](slice []T) bool {
	return slice == nil || len(slice) == 0
}

func IsNotEmptySlice[T any](slice []T) bool {
	return !IsEmptySlice(slice)
}
