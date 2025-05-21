"use client";

import FooterSection from "@/app/(pages)/home/partials/FooterSection";
import HeroSection from "@/app/(pages)/home/partials/HeroSection";
import ScheduleSection from "@/app/(pages)/home/partials/ActivitiesSection";
import TestimonySection from "@/app/(pages)/home/partials/TestimonySection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
	return (
		<div className="flex flex-col gap-48">
			<HeroSection />

			<ScheduleSection />

			<TestimonySection />

			<FooterSection />
		</div>
	);
};

export default Home;
