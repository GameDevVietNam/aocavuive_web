'use client'

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from '@/config/firebase'
import { ISubscriber } from '@/interfaces/subscriber'

import { columns } from './components/columns'
import DataTable from './components/DataTable'

const Subscribers = () => {
	const [loading, setLoading] = useState(true)
	const [subscribers, setSubscribers] = useState<ISubscriber[]>([])

	useEffect(() => {
		;(async () => {
			const snapshot = await getDocs(collection(db, 'subscribers'))
			const data = snapshot.docs.map((doc) => doc.data()) as ISubscriber[]
			setSubscribers(data)
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className='space-y-7'>
			<div className='text-2xl font-bold'>
				Subscriber details ({subscribers.length})
			</div>

			<DataTable
				columns={columns}
				data={subscribers}
			/>
		</div>
	)
}

export default Subscribers
