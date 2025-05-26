import { FC, memo } from 'react'

import { style } from '@/constants/style'

interface BenefitProps {
	index: number
}

const Benefit: FC<BenefitProps> = ({ index }) => {
	return (
		<div className='flex items-center gap-3'>
			<div
				className='flex items-center justify-center w-8 h-8 rounded-full text-center'
				style={{
					backgroundImage: style.backgroundImage,
				}}>
				{index + 1}
			</div>
			{index === 0
				? 'Luôn nhận được tin và sự kiện mới nhất'
				: index === 1
				? 'Nhận được phần thưởng cho người chơi đăng ký trước'
				: index === 2
				? 'Không bỏ lỡ những sản phẩm mới nhất'
				: 'Nhận được huy hiệu cho FAN'}
		</div>
	)
}

export default memo(Benefit)
