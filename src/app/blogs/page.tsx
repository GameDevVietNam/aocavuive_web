'use client'

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import Blog from '@/components/Blog'
import { db } from '@/config/firebase'
import { IBlog } from '@/interfaces/blog'

const Blogs = () => {
	const [loading, setLoading] = useState(true)
	const [blogs, setBlogs] = useState<IBlog[]>([])

	useEffect(() => {
		;(async () => {
			const snapshot = await getDocs(collection(db, 'blogs'))
			const data = snapshot.docs
				.map((doc) => doc.data())
				.slice(0, 3) as IBlog[]

			setBlogs(data)
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className='space-y-7'>
			<div className='text-3xl font-bold text-center'>Blogs</div>

			<div className='grid grid-cols-3 gap-4'>
				{blogs.map((blog) => (
					<Blog
						key={blog.id}
						{...blog}
					/>
				))}
			</div>
		</div>
	)
}

export default Blogs
