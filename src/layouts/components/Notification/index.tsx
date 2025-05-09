'use client'

import Link from 'next/link'

import { useT } from '@/app/i18n/client'
import { style } from '@/constants/style'

const Notification = () => {
	const { t } = useT()

	return (
		<div
			className='absolute top-0 left-0 w-full p-2 text-sm md:text-base text-white text-center'
			style={{
				backgroundImage: style.backgroundImage,
			}}>
			{t('notification')}{' '}
			<Link
				href='#subscribe'
				className='font-bold underline'>
				{t('register')}
			</Link>
		</div>
	)
}

export default Notification
