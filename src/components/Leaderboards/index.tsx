'use client'

import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { useT } from '@/app/i18n/client'
import { db } from '@/config/firebase'
import { animation } from '@/constants/animation'
import { IUser } from '@/interfaces/user'

import Pagination from './Pagination'
import Rank from './Rank'

const Leaderboards = () => {
	const [top, setTop] = useState<IUser[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const { t } = useT()
	const itemsPerPage = 5

	useEffect(() => {
		;(async () => {
			const q = query(collection(db, 'top'), orderBy('point', 'desc'))
			const snapshot = await getDocs(q)
			const data = snapshot.docs.map((doc) => doc.data())
			setTop(data as IUser[])
		})()
	}, [])

	return (
		<div className='space-y-4'>
			<motion.div
				{...animation.fromBot}
				className='text-xl font-semibold'>
				{t('top')}
			</motion.div>

			<motion.div
				{...animation.fromBot}
				className='p-4 bg-semidark rounded-2xl space-y-1'>
				<div className='flex gap-4 mb-4 px-2'>
					<div className='shrink-0 uppercase font-semibold text-sm text-gray-300 w-10'>
						Rank
					</div>

					<div className='flex-1 uppercase font-semibold text-sm text-gray-300'>
						Player
					</div>

					<div className='srhink-0 uppercase font-semibold text-sm text-gray-300 w-10'>
						Points
					</div>
				</div>

				{top
					.slice(
						(currentPage - 1) * itemsPerPage,
						currentPage * itemsPerPage,
					)
					.map((rank, i) => (
						<Rank
							key={rank.id}
							index={i + 1}
							{...rank}
						/>
					))}

				<div className='flex justify-center mt-4'>
					<Pagination
						length={top.length}
						itemsPerPage={itemsPerPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			</motion.div>
		</div>
	)
}

export default Leaderboards
