"use client";

import React from "react";

import OrganicMinistryLogo from "@/public/assets/images/om-icon.png";
import { useSidebarStore } from "@/app/store/SidebarStore";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	const container = useRef(null);

	useGSAP(
		() => {
			gsap.to(".navbar-background", {
				scrollTrigger: {
					trigger: ".trigger-background",
					toggleActions: "play none none reverse",
					start: "top top"
				},
				backgroundColor: "#ffffff"
			});
		},
		{ scope: container }
	);

	const { handleToggleSidebar: toggleSidebar, isSidebarOpened } =
		useSidebarStore((state) => state);

	const sidebarClass = clsx(
		"fixed top-0 left-0 right-0 px-12 w-screen flex justify-between items-center font-bold navbar-background",
		{ "z-50": !isSidebarOpened }
	);

	return (
		<div ref={container}>
			<div className={sidebarClass}>
				<Link href="/">
					<Image
						alt="Organic Ministry Logo"
						src={OrganicMinistryLogo}
						className="cursor-pointer max-lg:w-40"
						width={200}
						height={100}
					/>
				</Link>
				<h1
					className="text-5xl max-lg:text-4xl cursor-pointer"
					onClick={toggleSidebar}
				>
					MENU
				</h1>
			</div>

			{children}
		</div>
	);
};

export default NavbarLayout;
