"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Swal from 'sweetalert2'

import { animation } from "@/constants/animation";
import { style } from "@/constants/style";

import { Button } from "../../ui/button";

const banners = [
	// {
	// 	src: "/banners/atias-legacy-home-banner.jpg",
	// 	title: "Pre-register and refer your friends!",
	// 	description: "Playtest Summer '25",
	// },
	{
		src: "/banners/nightmare.jpg",
		title: "Sự khởi đầu của một cuộc phiêu lưu mới",
		description:
			"Từ thuở xa xưa, đại dương rộng lớn tồn tại một vùng đất thiêng mang tên Thủy Giới (Aqualis) – nơi sinh sống của những sinh vật biển kỳ diệu.",
	},
	// {
	// 	src: "/banners/forging-banner.jpg",
	// 	title: "Introducing: Forging",
	// 	description: "A new axie core mechanic.",
	// },
];

const Banner = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const timerRef = useRef<NodeJS.Timeout>(null);

	const handlePrev = () => setActiveIndex(Math.max(0, activeIndex - 1));
	const handleNext = () => {
		setActiveIndex((prev) => {
			if (prev >= banners.length - 1) {
				return 0;
			}

			return prev + 1;
		});
	};

	useEffect(() => {
		timerRef.current = setInterval(() => handleNext(), 5000);

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, []);

	return (
		<motion.div
			{...animation.fromBot}
			className="h-84 rounded-2xl relative overflow-hidden"
		>
			{/* animation bg */}
			{banners.map(
				(banner, i) =>
					i === activeIndex && (
						<motion.div
							key={banner.src}
							initial={{ opacity: 0, translateX: "-100%" }}
							animate={{ opacity: 1, translateX: 0 }}
							className="absolute inset-0 bg-cover bg-bottom-right md:bg-center bg-no-repeat"
							style={{
								backgroundImage: `url(${banner.src})`,
							}}
						></motion.div>
					),
			)}

			{/* overlay */}
			<div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,.2)]"></div>

			<div className="absolute bottom-4 left-4 space-y-4 max-w-xl">
				<div className="text-2xl font-bold">
					{banners[activeIndex].title}
				</div>

				<div className="text-xs font-medium">
					{banners[activeIndex].description}
				</div>

				<div className="flex items-center gap-3">
					<Button
					onClick={()=>{
						Swal.fire({
							html: `<div style="text-align: justify;">Từ thuở xa xưa, đại dương rộng lớn tồn tại một vùng đất thiêng mang tên <i style="color: blue;">Thủy Giới (Aqualis)</i> – nơi sinh sống của những sinh vật biển kỳ diệu. Trong lòng <i style="color: blue;">Thủy Giới</i> là <i style="color: red;">Nguồn Sống Lam Ngọc</i>, viên đá thần bí cung cấp năng lượng và sự sống cho toàn bộ hệ sinh thái dưới đáy biển.<br><br>
							Tuy nhiên, một ngày kia, <b>Hắc Ngư Vương</b>, một sinh vật bị tha hóa bởi tham vọng quyền lực, đã đánh cắp một phần <i style="color: red;">Lam Ngọc</i> và triệu hồi lũ quái vật biển đen tối để thống trị đại dương. <i style="color: blue;">Thủy Giới</i> rơi vào hỗn loạn, cá và sinh vật biển mất kiểm soát, san hô tàn lụi, vùng biển từng trù phú giờ chỉ còn bóng tối.<br><br>
							Bạn – một <i style="color: green;">Ngư Dân Truyền Thừa</i>, được giao trọng trách phục hồi <i style="color: blue;">Thủy Giới</i>. Với mảnh <i style="color: red;">Lam Ngọc</i> còn lại, bạn bắt đầu xây dựng lại Nông Trại Biển, chăm sóc các loài cá đặc biệt, huấn luyện chúng, lai tạo những giống cá huyền thoại và chế tạo trang bị từ kho báu cổ xưa dưới biển sâu.<br><br>`
						});
					}}
						style={{
							backgroundImage: style.backgroundImage,
						}}
					>
						Đọc thêm
					</Button>

					{/* <Button>Learn more</Button> */}
				</div>
			</div>

			<div className="absolute bottom-4 right-4 hidden md:flex items-center gap-4">
				{banners.map((banner, i) => (
					<div
						key={banner.src}
						className={clsx(
							"w-32 h-16 rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer transition-all border-2 border-transparent",
							i === activeIndex && "border-white",
						)}
						onClick={() => setActiveIndex(i)}
						style={{
							backgroundImage: `url(${banner.src})`,
						}}
					></div>
				))}
			</div>
		</motion.div>
	);
};

export default Banner;
