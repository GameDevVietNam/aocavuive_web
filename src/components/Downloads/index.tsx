import { motion } from 'motion/react'
import Image from 'next/image'
import { toast } from 'sonner'

import AppStore from './AppStore'
import ChPlay from './ChPlay'

const Downloads = () => {
	const showIsDevelopment = () => {
		toast.info('Game đang trong giai đoạn phát triển, chờ tý bạn nhé!')
	}

	return (
		<div className='flex flex-col gap-7 items-center'>
			<div className='text-2xl font-bold'>Tải xuống</div>

			<div className='relative'>
				<ChPlay onClick={showIsDevelopment} />

				<motion.div
					onClick={showIsDevelopment}
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3 }}
					whileHover={{ scale: 1.05 }}
					className='relative cursor-pointer rounded-full'>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-500 rounded-full blur-2xl transition-all'></div>

					<div className='p-2 bg-white rounded-full relative z-20 transition-all'>
						<Image
							src='/qrcode.svg'
							alt='QR Code'
							width={64}
							height={64}
						/>
					</div>
				</motion.div>

				<AppStore onClick={showIsDevelopment} />
			</div>
		</div>
	)
}

export default Downloads
