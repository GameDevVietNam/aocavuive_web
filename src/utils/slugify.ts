function slugify(str: string) {
	return str
		.normalize('NFD') // Decompose accents
		.replace(/[\u0300-\u036f]/g, '') // Remove diacritics
		.toLowerCase() // Lowercase
		.replace(/[^a-z0-9\s-]/g, '') // Remove special characters
		.trim() // Trim whitespace
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/-+/g, '-') // Collapse multiple hyphens
}

export default slugify
