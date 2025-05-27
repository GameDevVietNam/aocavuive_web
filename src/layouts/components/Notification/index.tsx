'use client'

import Link from 'next/link'

import { style } from '@/constants/style'

const Notification = () => {
	return (
		<div
			className='absolute top-0 left-0 w-full p-2 text-sm md:text-base text-white text-center'
			style={{
				backgroundImage: style.backgroundImage,
			}}>
			Chính thức mở đăng ký trước.{' '}
			<Link
				href='/#subscribe'
				className='font-bold underline'>
				Đăng ký ngay
			</Link>
		</div>
	)
}

export default Notification
