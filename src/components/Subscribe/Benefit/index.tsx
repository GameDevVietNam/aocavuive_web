import { FC, memo } from 'react'

import { style } from '@/constants/style'

interface BenefitProps {
	text: string
	index: number
}

const Benefit: FC<BenefitProps> = ({ text, index }) => {
	return (
		<div className='flex items-center gap-3'>
			<div
				className='flex items-center justify-center w-8 h-8 rounded-full text-center'
				style={{
					backgroundImage: style.backgroundImage,
				}}>
				{index + 1}
			</div>
			{text}
		</div>
	)
}

export default memo(Benefit)
