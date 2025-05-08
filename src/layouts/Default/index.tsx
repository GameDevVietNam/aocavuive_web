import Link from 'next/link'
import { ReactNode } from 'react'

import { style } from '@/constants/style'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const DefaultLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />

			<div className='flex h-[calc(100vh-64px)] bg-darker overflow-hidden'>
				<Sidebar />

				<div className='relative flex-1 min-h-screen overflow-y-scroll'>
					<div
						className='absolute top-0 left-0 w-full p-2 text-white text-center'
						style={{
							backgroundImage: style.backgroundImage,
						}}>
						Ngày 09/05/2025 chính thức mở đăng ký trước nhanh tay
						ngay nào!{' '}
						<Link
							href='#subscribe'
							className='font-bold underline'>
							Subscribe
						</Link>
					</div>

					<main className='px-4 max-w-6xl md:pt-16 pt-24 pb-20 mx-auto text-white space-y-12'>
						{children}
					</main>
				</div>
			</div>
		</>
	)
}

export default DefaultLayout
