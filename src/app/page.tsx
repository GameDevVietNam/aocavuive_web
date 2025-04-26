import Discover from "@/components/Discover";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leaderboards from "@/components/Leaderboards";
import Marketplace from "@/components/Marketplace";
import OverallStats from "@/components/OverallStats";
import Sidebar from "@/components/Sidebar";

const banners = [
	"/banners/atias-legacy-home-banner.jpg",
	"/banners/nightmare.jpg",
	"/banners/forging-banner.jpg",
];

export default function Home() {
	return (
		<>
			<Header />

			<div className="flex h-[calc(100vh-64px)] bg-darker overflow-hidden">
				<Sidebar />

				<main className="flex-1 min-h-screen px-4 overflow-y-scroll max-w-6xl pt-8 pb-20 mx-auto text-white space-y-12 no-scrollbar">
					<Hero />

					<div className="grid md:grid-cols-2 gap-6">
						<div className="flex-1 space-y-12 overflow-hidden">
							<Leaderboards />
							<Marketplace />
							<Discover />
						</div>

						<OverallStats />
					</div>
				</main>
			</div>
		</>
	);
}
