"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiShareBoxLine } from "react-icons/ri";

import { animation } from "@/constants/animation";

import { Button } from "../ui/button";
import Pagination from "./Pagination";
import Rank from "./Rank";

const fakeRankData = [
	{
		avatar: "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-login-interface-abstract-blue-icon-png-image_3917504.jpg",
		name: "Chưa có dữ liệu",
		points: "???",
		rank: 1,
	},
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/32.jpg",
	// 	name: "Liam Chen",
	// 	points: "9,721",
	// 	rank: 2,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/22.jpg",
	// 	name: "Sophia Rodriguez",
	// 	points: "9,586",
	// 	rank: 3,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/45.jpg",
	// 	name: "Mason Williams",
	// 	points: "9,432",
	// 	rank: 4,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/33.jpg",
	// 	name: "Olivia Garcia",
	// 	points: "9,154",
	// 	rank: 5,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/22.jpg",
	// 	name: "Noah Martinez",
	// 	points: "8,976",
	// 	rank: 6,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/44.jpg",
	// 	name: "Ava Thompson",
	// 	points: "8,821",
	// 	rank: 7,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/56.jpg",
	// 	name: "Ethan Brown",
	// 	points: "8,745",
	// 	rank: 8,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/55.jpg",
	// 	name: "Isabella Davis",
	// 	points: "8,654",
	// 	rank: 9,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/67.jpg",
	// 	name: "Lucas Wilson",
	// 	points: "8,532",
	// 	rank: 10,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/66.jpg",
	// 	name: "Mia Anderson",
	// 	points: "8,321",
	// 	rank: 11,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/78.jpg",
	// 	name: "Alexander Lee",
	// 	points: "8,165",
	// 	rank: 12,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/77.jpg",
	// 	name: "Charlotte Patel",
	// 	points: "7,987",
	// 	rank: 13,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/89.jpg",
	// 	name: "Benjamin Taylor",
	// 	points: "7,865",
	// 	rank: 14,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/88.jpg",
	// 	name: "Amelia Wright",
	// 	points: "7,743",
	// 	rank: 15,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/90.jpg",
	// 	name: "William Harris",
	// 	points: "7,654",
	// 	rank: 16,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/99.jpg",
	// 	name: "Harper Clark",
	// 	points: "7,532",
	// 	rank: 17,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/12.jpg",
	// 	name: "James Robinson",
	// 	points: "7,421",
	// 	rank: 18,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/women/13.jpg",
	// 	name: "Evelyn Scott",
	// 	points: "7,354",
	// 	rank: 19,
	// },
	// {
	// 	avatar: "https://randomuser.me/api/portraits/men/24.jpg",
	// 	name: "Daniel King",
	// 	points: "7,253",
	// 	rank: 20,
	// },
];

const Leaderboards = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	return (
		<div className="space-y-4">
			<motion.div
				{...animation.fromBot}
				className="text-xl font-semibold"
			>
				Bảng xếp hạng
			</motion.div>

			<motion.div
				{...animation.fromBot}
				className="flex items-center gap-3 flex-nowrap overflow-x-scroll no-scrollbar"
			>
				{/* <Button>
					<Image
						src="/premier-ticket-icon.png"
						alt=""
						width={20}
						height={20}
					/>
					Premier Bounty Board
				</Button>

				<Button>
					<Image
						src="/origins-game.png"
						alt=""
						width={20}
						height={20}
					/>
					Axie Infinity: Origins
				</Button>

				<Button>
					<Image
						src="/classic-game.jpg"
						alt=""
						width={20}
						height={20}
					/>
					Axie Classic
				</Button> */}
			</motion.div>

			<motion.div
				{...animation.fromBot}
				className="p-4 bg-semidark rounded-2xl space-y-1"
			>
				<div className="flex gap-4 mb-4 px-2">
					<div className="shrink-0 uppercase font-semibold text-sm text-gray-300 w-10">
						Rank
					</div>

					<div className="flex-1 uppercase font-semibold text-sm text-gray-300">
						Người chơi
					</div>

					<div className="srhink-0 uppercase font-semibold text-sm text-gray-300 w-10">
						Điểm
					</div>
				</div>

				{fakeRankData
					.slice(
						(currentPage - 1) * itemsPerPage,
						currentPage * itemsPerPage,
					)
					.map((rank) => (
						<Rank key={rank.rank} {...rank} />
					))}

				{/* <div className="flex items-center flex-wrap gap-4 justify-between">
					<Link
						href="/premier-bounty-board"
						className="flex items-center gap-3 text-orange-400 font-medium"
					>
						Premier Bounty Board
						<RiShareBoxLine />
					</Link>

					<Pagination
						length={fakeRankData.length}
						itemsPerPage={itemsPerPage}
						setCurrentPage={setCurrentPage}
					/>
				</div> */}
			</motion.div>
		</div>
	);
};

export default Leaderboards;
