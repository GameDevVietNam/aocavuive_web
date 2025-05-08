function calcMinRead(text: string, wordsPerMinute = 200) {
	const words = text.trim().split(/\s+/).length
	const minutes = Math.ceil(words / wordsPerMinute)
	return minutes + ' mins read'
}

export default calcMinRead
