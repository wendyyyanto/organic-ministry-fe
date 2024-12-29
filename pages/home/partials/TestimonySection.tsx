"use client";

import { Pagination } from "swiper/modules";
import { dummyTestimony } from "@/app/data/dummyTestimony";
import { Swiper, SwiperSlide } from "swiper/react";

function TestimonySection() {
	return (
		<div className="w-full flex justify-center font-melo">
			<div className="w-[750px] flex flex-col gap-8">
				<div className="flex flex-col gap-5">
					<h1 className="text-7xl text-center font-semibold">
						MOMENT <br /> WITH GOD
					</h1>
					<p className="text-center font-sans text-xl font-light leading-tight">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi
					</p>
				</div>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						enabled: true,
						clickable: true
					}}
					modules={[Pagination]}
					className="h-52 w-full"
				>
					{dummyTestimony.map((testimony) => (
						<SwiperSlide
							className="flex flex-col h-full justify-center items-center gap-4 px-5 py-6 bg-primary text-secondary font-sans"
							key={testimony.id}
						>
							<p className="text-xl max-w-full w-full line-clamp-3 max-h-24 font-light overflow-hidden text-ellipsis text-center leading-6">
								&ldquo;{testimony.testimony}&rdquo;
							</p>
							<div className="flex flex-col text-center">
								<p className="font-bold font-melo text-xl">
									{testimony.writer}
								</p>
								<p className="font-normal text-lg">
									{testimony.verse}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default TestimonySection;
