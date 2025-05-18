"use client";

import Sidebar from "@/app/components/Sidebar";

import { useSidebarStore } from "@/app/store/SidebarStore";

import FooterSection from "@/app/(pages)/home/partials/FooterSection";
import HeroSection from "@/app/(pages)/home/partials/HeroSection";
import ScheduleSection from "@/app/(pages)/home/partials/ScheduleSection";
import TestimonySection from "@/app/(pages)/home/partials/TestimonySection";
import { AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
	const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);

	return (
		<div className="flex flex-col gap-48">
			<HeroSection />

			<ScheduleSection />

			<TestimonySection />

			<FooterSection />

			<AnimatePresence>{isSidebarOpened && <Sidebar />}</AnimatePresence>
		</div>
	);
};

export default Home;
