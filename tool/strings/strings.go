package strings

func FullLeft(origin string, fullLen int, full string) string {
	for i := len(origin); i < fullLen; i += len(full) {
		origin += full
	}
	return origin
}
