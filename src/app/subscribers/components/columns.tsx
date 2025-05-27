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
			// Assuming createdAt is a timestamp (number)
			return moment(value as number).fromNow()
		},
	},
	{
		accessorKey: 'updatedAt',
		header: 'Updated At',
		cell: ({ row }) => {
			const value = row.getValue('updatedAt')
			// Assuming updatedAt is a timestamp (number)
			return moment(value as number).fromNow()
		},
	},
	{
		accessorKey: 'ipAddress',
		header: 'IP Address',
	},
	{
		accessorKey: 'userAgent',
		header: 'User Agent',
		// Optional: You might want to truncate or style this if it's too long
		// cell: ({ row }) => {
		//   const value = row.getValue('userAgent') as string;
		//   return <div title={value} className="truncate w-64">{value}</div>;
		// }
	},
	{
		accessorKey: 'language',
		header: 'Language',
	},
	{
		accessorKey: 'screenWidth',
		header: 'Screen Width',
	},
	{
		accessorKey: 'screenHeight',
		header: 'Screen Height',
	},
]
