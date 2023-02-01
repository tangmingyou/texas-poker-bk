package collect

func In[T comparable](value T, values ...T) bool {
	for _, v := range values {
		if value == v {
			return true
		}
	}
	return false
}
