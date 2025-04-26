const animation = {
	fromBot: {
		initial: {
			opacity: 0,
			translateY: 40,
		},
		whileInView: {
			opacity: 1,
			translateY: 0,
		},
		transition: {
			duration: 0.5,
		},
	},
	fadeIn: {
		initial: {
			opacity: 0,
			scale: 0.5,
		},
		whileInView: {
			opacity: 1,
			scale: 1,
		},
		transition: {
			duration: 0.5,
		},
		whileHover: {
			translateY: -12,
		},
	},
}

export { animation }
