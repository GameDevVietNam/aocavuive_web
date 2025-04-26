"use client";

import { motion } from "motion/react";

import { animation } from "@/constants/animation";

import Banner from "./Banner";

const Hero = () => {
	return (
		<div className="space-y-7">
			<motion.div
				{...animation.fromBot}
				className="text-3xl md:text-4xl font-bold"
			>
				Welcome, Lunacian!
			</motion.div>

			<Banner />
		</div>
	);
};

export default Hero;
