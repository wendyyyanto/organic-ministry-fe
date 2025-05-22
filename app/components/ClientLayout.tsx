"use client";

import { AnimatePresence } from "framer-motion";
import React, { Fragment } from "react";
import { useSidebarStore } from "../store/SidebarStore";
import Sidebar from "./Sidebar";

const ClientLayout = ({
	children
}: Readonly<{ children: React.ReactNode }>) => {
	const { isSidebarOpened } = useSidebarStore((state) => state);

	return (
		<Fragment>
			<AnimatePresence mode="sync">
				{isSidebarOpened && <Sidebar />}
			</AnimatePresence>
			{children}
		</Fragment>
	);
};

export default ClientLayout;
