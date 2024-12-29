"use client";

import React from "react";
import { useSidebarStore } from "@/app/store/SidebarStore";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import { dummyTeachers } from "@/app/data/dummyTeachers";
import TeacherCard from "./partials/TeacherCard";
import { useTeacher } from "./hooks/useTeacher";

function Teachers() {
	const isSidebarOpened = useSidebarStore((state) => state.isSidebarOpened);

	const { scope } = useTeacher();

	return (
		<div
			className="flex flex-col gap-16 px-12 py-12 font-melo pt-40 items-center justify-center"
			ref={scope}
		>
			<div className="w-full flex flex-col items-center gap-4">
				<h1 className="text-6xl font-bold">
					Meet Our Faithful Teachers
				</h1>
				<p className="text-lg font-sans font-light w-1/3 text-center leading-tight">
					Our dedicated teachers are the heart of our ministry,
					guiding and nurturing our community with wisdom, love, and a
					deep commitment to God&apos;s Word.
				</p>
			</div>
			<div className="w-full flex flex-wrap gap-10 justify-center items-center">
				{dummyTeachers.map((teacher) => (
					<TeacherCard key={teacher.id} teacher={teacher} />
				))}
			</div>

			<AnimatePresence>{isSidebarOpened && <Sidebar />}</AnimatePresence>
		</div>
	);
}

export default Teachers;
