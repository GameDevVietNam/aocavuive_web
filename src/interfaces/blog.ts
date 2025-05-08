import { IDocument } from './document'

export interface IBlog extends IDocument {
	slug: string
	title: string
	description: string
	tags: string[]
	thumbnailURL: string
	content: string
}
