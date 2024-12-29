"use client";

import React, { Fragment } from "react";

import OrganicMinistryLogo from "@/public/assets/images/om-icon.png";
import { useSidebarStore } from "@/app/store/SidebarStore";
import Link from "next/link";
import Image from "next/image";

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
	const toggleSidebar = useSidebarStore((state) => state.handleToggleSidebar);

	return (
		<Fragment>
			<div className="absolute px-12 w-screen left-0 flex justify-between items-center font-melo font-bold">
				<Link href="/">
					<Image
						alt="Organic Ministry Logo"
						src={OrganicMinistryLogo}
						width={200}
						height={100}
					/>
				</Link>
				<p className="text-5xl cursor-pointer" onClick={toggleSidebar}>
					MENU
				</p>
			</div>

			{children}
		</Fragment>
	);
};

export default NavbarLayout;
