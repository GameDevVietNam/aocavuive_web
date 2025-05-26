'use client'

import 'github-markdown-css'

import { collection, getDocs, query, where } from 'firebase/firestore'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { toast } from 'sonner'

import { Badge } from '@/components/ui/badge'
import { db } from '@/config/firebase'
import { IBlog } from '@/interfaces/blog'
import calcMinRead from '@/utils/calcMinRead'

const Blog = ({ slug }: { slug: string }) => {
	const router = useRouter()
	const [blog, setBlog] = useState<IBlog>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			const blogsRef = collection(db, 'blogs')
			const q = query(blogsRef, where('slug', '==', slug))
			const snapshot = await getDocs(q)

			if (snapshot.empty) {
				router.push('/')
				toast('Blog does not exist!')
				return
			}

			const blogData = snapshot.docs[0].data() as IBlog
			setBlog(blogData)
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className='space-y-7'>
			<div className='space-y-3'>
				<div className='text-3xl font-bold'>{blog?.title}</div>

				<div className='flex items-center gap-3'>
					<div>
						Updated at:{' '}
						{moment(blog?.updatedAt).format('HH:mm DD:MM:YYYY')}
					</div>
					<div>-</div>
					<div>{calcMinRead(blog?.content as string)}</div>
				</div>

				<div className='flex items-center gap-3 flex-wrap'>
					{blog?.tags.map((tag) => (
						<Badge key={tag}>{tag}</Badge>
					))}
				</div>
			</div>

			<div className='markdown-body border-b-transparent !text-white !bg-transparent'>
				<ReactMarkdown
					rehypePlugins={[rehypeRaw]}
					remarkPlugins={[remarkGfm]}>
					{blog?.content}
				</ReactMarkdown>
			</div>
		</div>
	)
}

export default Blog
