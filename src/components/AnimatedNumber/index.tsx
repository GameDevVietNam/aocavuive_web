import { useEffect } from 'react'

import { animated, useSpring } from '@react-spring/web'

const AnimatedNumber = ({ to }: { to: number }) => {
	const [styles, api] = useSpring(() => ({ number: 0 }))

	useEffect(() => {
		api.start({ number: to })
	}, [to])

	return (
		<animated.span>
			{styles.number.to((n) => Math.floor(n).toLocaleString())}
		</animated.span>
	)
}

export default AnimatedNumber
