"use client";

import JesusCampImage from "@/public/assets/images/jesus-camp.png";
import Image from "next/image";

const UnderConstruction = () => {
	return (
		<div className="bg-slate-950 w-screen h-screen flex flex-col justify-center items-center">
			<div className="absolute top-1/4">
				<h1 className="text-7xl font-medium ">
					UNDER-GOING CONSTRUCTION
				</h1>
				<p className="text-xl text-center font-sans">
					We&apos;re working on this page so it can be finished as
					soon as possible.
				</p>
			</div>
			<Image
				className="rounded-2xl"
				src={JesusCampImage}
				alt="Jesus Camp"
			/>
		</div>
	);
};

export default UnderConstruction;
