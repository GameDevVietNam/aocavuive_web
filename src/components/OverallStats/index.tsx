'use client'

import { collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { useT } from '@/app/i18n/client'
import { db } from '@/config/firebase'
import { IReport } from '@/interfaces/report'
import calcReportSums from '@/utils/calcReportSums'

import Stat from './Stat'

const stats = [
	{
		src: '/axie-tab-icon.png',
		label: 'Total axies',
	},
	{
		src: '/player.png',
		label: 'Total owners',
	},
	{
		src: '/meo-token.png',
		label: 'Total volume',
	},
	{
		src: '/contract.png',
		label: 'Total volume',
	},
]

const thisWeekStats = [
	{
		src: '/axies-stats.png',
		label: 'Total axies',
	},
	{
		src: '/player.png',
		label: 'Total owners',
	},
	{
		src: '/meo-token.png',
		label: 'Total volume',
	},
	{
		src: '/sales-stats.png',
		label: 'Total volume',
	},
]

const OverallStats = () => {
	const [reports, setReports] = useState<IReport[]>([])
	const [loading, setLoading] = useState(true)
	const { t } = useT()

	useEffect(() => {
		;(async () => {
			const snapshot = await getDocs(collection(db, 'reports'))
			const data = snapshot.docs.map((doc) => doc.data())
			setReports(data as IReport[])
			setLoading(false)
		})()
	}, [])

	const { lastWeekSums, totalSums } = calcReportSums(reports)

	return (
		<div className='relative py-6 px-12 space-y-6 rounded-2xl bg-semidark'>
			<div className='text-2xl font-semibold'>{t('overallStats')}</div>

			{stats.map((stat, i) => (
				<Stat
					key={stat.src}
					{...stat}
					value={totalSums[i + 1]}
				/>
			))}

			<div className='h-1 bg-gray-300 rounded-full'></div>

			<div className='text-2xl font-semibold'>{t('thisWeek')}</div>
			<div className='text-sm text-gray-300'>{t('thisWeek.desc')}</div>

			{thisWeekStats.map((stat, i) => (
				<Stat
					key={stat.src}
					{...stat}
					value={lastWeekSums[i + 1]}
				/>
			))}

			<div className='absolute bottom-0 right-0'>
				<Image
					src='/axie-hiding.png'
					alt='Axie hiding'
					width={80}
					height={80}
				/>
			</div>
		</div>
	)
}

export default OverallStats
