'use client'

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { useT } from '@/app/i18n/client'
import { db } from '@/config/firebase'
import { IBlog } from '@/interfaces/blog'

import Blog from '../Blog'

const Discover = () => {
	const [blogs, setBlogs] = useState<IBlog[]>([])
	const { t } = useT()

	useEffect(() => {
		;(async () => {
			const snapshot = await getDocs(collection(db, 'blogs'))
			const data = snapshot.docs.map((doc) => doc.data()) as IBlog[]

			setBlogs(data)
		})()
	}, [])

	return (
		<div className='space-y-4'>
			<div className='text-2xl font-semibold'>{t('discover')}</div>

			<div className='grid gap-4 md:grid-cols-3'>
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

export default Discover
