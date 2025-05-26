'use client'

import moment from 'moment'

import { ISubscriber } from '@/interfaces/subscriber'
import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ISubscriber>[] = [
	{
		accessorKey: 'id',
		header: 'Id',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'createdAt',
		header: 'Created At',
		cell: ({ row }) => {
			const value = row.getValue('createdAt')

			return moment(value as Date).fromNow()
		},
	},
]
