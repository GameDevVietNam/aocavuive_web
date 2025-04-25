import clsx from 'clsx'
import Image from 'next/image'
import { FC, memo } from 'react'
import { GiTrophy } from 'react-icons/gi'

interface RankProps {
	avatar: string
	name: string
	points: string
	rank: number
}

const Rank: FC<RankProps> = ({ avatar, name, points, rank }) => {
	return (
		<div
			className={clsx('relative flex gap-4 p-2 rounded-sm', {
				'bg-[rgba(255,180,68,.3)]': rank === 1,
				'bg-[rgba(180,188,203,.3)]': rank === 2,
				'bg-[rgba(166,100,79,.3)]': rank === 3,
			})}>
			{rank <= 3 && (
				<div
					className={clsx(
						'h-6 rounded-r-md w-1 absolute top-1/2 -translate-y-1/2 left-0',
						{
							'bg-[rgb(255,180,68)]': rank === 1,
							'bg-[rgb(180,188,203)]': rank === 2,
							'bg-[rgb(166,100,79)]': rank === 3,
						},
					)}></div>
			)}

			<div className='shrink-0 w-10 h-10 flex items-center justify-center'>
				{rank <= 3 ? (
					<GiTrophy
						size={20}
						className={clsx({
							'text-[rgb(255,180,68)]': rank === 1,
							'text-[rgb(180,188,203)]': rank === 2,
							'text-[rgb(166,100,79)]': rank === 3,
						})}
					/>
				) : (
					<span className='text-gray-300'>{rank}</span>
				)}
			</div>

			<div className='flex-1 flex items-center gap-3'>
				<Image
					src={avatar}
					alt={name}
					width={40}
					height={40}
					className='rounded-full object-cover'
				/>

				<div>{name}</div>
			</div>

			<div className='shrink-0 w-10 h-10 text-center flex items-center justify-center text-gray-300'>
				{points}
			</div>
		</div>
	)
}

export default memo(Rank)
