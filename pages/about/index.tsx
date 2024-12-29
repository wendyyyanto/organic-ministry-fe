"use client";

import React from "react";
import Sidebar from "@/app/components/Sidebar";
import { useSidebarStore } from "@/app/store/SidebarStore";
import { AnimatePresence } from "framer-motion";
import PlaceholderImage from "@/public/assets/images/about-placeholder.jpg";
import Image from "next/image";

function About() {
	const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);

	return (
		<div className="flex flex-col w-screen h-screen gap-5 px-12 pb-12 pt-40 font-melo">
			<div className="w-full h-full overflow-hidden">
				<Image
					src={PlaceholderImage}
					alt="Placeholder Image"
					className="object-cover w-full"
				/>
			</div>
			<div className="flex gap-16 justify-between items-center w-full">
				<p className="text-xl font-normal">
					lorem ipsum lorem ipsum dolor sit amet deus lorem ipsum
					lorem ipsum dolor sit amet deus lorem ipsum lorem ipsum
					dolor sit amet deus lorem ipsum lorem ipsum dolor sit amet
					deus lorem ipsum lorem ipsum dolor sit amet deus lorem ipsum
					lorem ipsum dolor sit amet deus lorem ipsum lorem ipsum
					dolor sit amet deus lorem ipsum lorem ipsum dolor sit amet
					deus lorem ipsum lorem ipsum dolor sit amet deus lorem ipsum
					lorem ipsum dolor sit amet deus lorem ipsum lorem ipsum dolo
				</p>
				<p className="text-8xl font-bold">Organic Ministry</p>
			</div>

			<AnimatePresence>{isSidebarOpened && <Sidebar />}</AnimatePresence>
		</div>
	);
}

export default About;
