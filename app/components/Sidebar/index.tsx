import { motion } from "framer-motion";
import { useSidebarStore } from "@/app/store/SidebarStore";
import { useSidebar } from "@/app/components/Sidebar/hooks/useSidebar";
import Link from "next/link";

import { IoMdClose } from "react-icons/io";

function Sidebar() {
	const { scope } = useSidebar();

	const toggleSidebar = useSidebarStore((state) => state.handleToggleSidebar);

	const sideBarItems = [
		{ title: "Home", link: "/" },
		{ title: "Teachings", link: "/teachings" },
		{ title: "Activities", link: "/under-construction" },
		{ title: "Gallery", link: "/under-construction" },
		{ title: "About Us", link: "/about" }
	];

	return (
		<motion.div
			className="flex flex-col justify-center items-center gap-28 z-[999] w-screen h-screen fixed bg-primary top-0 left-0 py-7 px-12"
			initial={{
				opacity: 0
			}}
			animate={{
				opacity: 1
			}}
			transition={{
				duration: 0.1
			}}
			exit={{
				opacity: 0
			}}
		>
			<div className="flex justify-end absolute top-10 right-10 text-secondary text-3xl font-bold">
				<IoMdClose
					className="cursor-pointer text-5xl max-md:text-4xl"
					onClick={toggleSidebar}
				/>
			</div>
			<div
				className="flex flex-col gap-10 max-md:gap-6 w-full justify-center items-center"
				ref={scope}
			>
				{sideBarItems.map((item, index) => (
					<motion.div
						initial={{ opacity: 0 }}
						className="flex flex-col w-fit justify-center items-center text-secondary text-6xl max-lg:text-5xl max-md:text-4xl font-bold sidebar-item"
						key={index}
					>
						<Link href={item.link} onClick={toggleSidebar}>
							{item.title}
						</Link>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}

export default Sidebar;
