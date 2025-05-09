import { FC, memo } from 'react'

import { useT } from '@/app/i18n/client'
import { style } from '@/constants/style'

interface BenefitProps {
	index: number
}

const Benefit: FC<BenefitProps> = ({ index }) => {
	const { t } = useT()

	return (
		<div className='flex items-center gap-3'>
			<div
				className='flex items-center justify-center w-8 h-8 rounded-full text-center'
				style={{
					backgroundImage: style.backgroundImage,
				}}>
				{index + 1}
			</div>
			{t(`benefits.${index + 1}`)}
		</div>
	)
}

export default memo(Benefit)
