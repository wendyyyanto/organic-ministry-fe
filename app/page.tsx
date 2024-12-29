"use client";

import Sidebar from "@/app/components/Sidebar";

import { useSidebarStore } from "@/app/store/SidebarStore";

import ContactSection from "@/pages/home/partials/ContactSection";
import FooterSection from "@/pages/home/partials/FooterSection";
import HeroSection from "@/pages/home/partials/HeroSection";
import ScheduleSection from "@/pages/home/partials/ScheduleSection";
import TestimonySection from "@/pages/home/partials/TestimonySection";
import { AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
	const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);

	return (
		<div className="flex flex-col gap-16 px-12 font-melo">
			<HeroSection />

			<ScheduleSection />

			<TestimonySection />

			<ContactSection />

			<FooterSection />

			<AnimatePresence>{isSidebarOpened && <Sidebar />}</AnimatePresence>
		</div>
	);
};

export default Home;
