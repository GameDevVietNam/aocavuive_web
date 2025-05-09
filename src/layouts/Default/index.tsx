import { ReactNode } from 'react'

import Header from '../components/Header'
import Notification from '../components/Notification'
import Sidebar from '../components/Sidebar'

const DefaultLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />

			<div className='flex h-[calc(100vh-64px)] bg-darker overflow-hidden'>
				<Sidebar />

				<div className='relative flex-1 min-h-screen overflow-y-scroll'>
					<Notification />

					<main className='px-4 max-w-6xl md:pt-16 pt-24 pb-20 mx-auto text-white space-y-12'>
						{children}
					</main>
				</div>
			</div>
		</>
	)
}

export default DefaultLayout
