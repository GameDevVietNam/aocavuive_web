import Link from 'next/link'
import { FC, memo, ReactNode } from 'react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface ActiveLinkProps {
	href: string
	icon: ReactNode
	label: string
}

const ActiveLink: FC<ActiveLinkProps> = ({ href, icon, label }) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Link
						href={href}
						className='flex items-center gap-3 text-gray-300 p-2 rounded-md hover:text-orange-500 hover:bg-gray-700 transition'>
						{icon}
						{/* {label} */}
					</Link>
				</TooltipTrigger>
				<TooltipContent>{label}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default memo(ActiveLink)
