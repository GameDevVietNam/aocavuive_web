import moment from 'moment'
import Link from 'next/link'
import { FC } from 'react'

import { IBlog } from '@/interfaces/blog'
import calcMinRead from '@/utils/calcMinRead'

const Blog: FC<IBlog> = ({
	thumbnailURL,
	title,
	description,
	createdAt,
	content,
	slug,
}) => {
	return (
		<Link
			href={`/blogs/${slug}`}
			className='hover:text-orange-500 transition hover:-translate-y-2'>
			<div
				className='w-full h-48 bg-cover bg-center bg-no-repeat shadow-2xl rounded-2xl'
				style={{
					backgroundImage: `url(${thumbnailURL})`,
				}}></div>

			<div className='p-4 space-y-4'>
				<div className='font-semibold line-clamp-1 text-xl'>
					{title}
				</div>

				<div className='text-sm line-clamp-3'>{description}</div>

				<div className='flex items-center mt-auto justify-between'>
					<div className='text-sm text-gray-300'>
						{moment(createdAt).fromNow()}
					</div>
					<div className='text-sm text-gray-300'>
						{calcMinRead(content)}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Blog
