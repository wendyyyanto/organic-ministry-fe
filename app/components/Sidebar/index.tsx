import { motion } from "framer-motion";
import { useSidebarStore } from "@/app/store/SidebarStore";
import { useSidebar } from "@/app/components/Sidebar/hooks/useSidebar";
import Link from "next/link";

function Sidebar() {
	const { scope } = useSidebar();

	const toggleSidebar = useSidebarStore((state) => state.handleToggleSidebar);

	const sideBarItems = [
		{ title: "Home", link: "/" },
		{ title: "Activities", link: "/under-construction" },
		{ title: "Teachers", link: "/teachers" },
		{ title: "Gallery", link: "/under-construction" },
		{ title: "About Us", link: "/about" }
	];

	return (
		<motion.div
			className="flex flex-col gap-28 w-screen h-screen fixed bg-primary top-0 left-0 py-7 px-12 font-melo"
			initial={{
				opacity: 0
			}}
			animate={{
				opacity: 1
			}}
			transition={{
				duration: 0.1,
				delay: 0.25
			}}
			exit={{
				opacity: 0
			}}
		>
			<div className="flex justify-end text-secondary text-3xl font-bold">
				<p className="cursor-pointer" onClick={toggleSidebar}>
					Close
				</p>
			</div>
			<div
				className="flex flex-col gap-10 w-full justify-center items-center"
				ref={scope}
			>
				{sideBarItems.map((item, index) => (
					<motion.div
						initial={{ opacity: 0 }}
						className="flex justify-center items-center w-full text-secondary text-6xl font-bold Custom-SideBar-Item"
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
