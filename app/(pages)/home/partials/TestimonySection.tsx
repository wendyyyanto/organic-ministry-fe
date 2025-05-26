"use client";

import { Pagination } from "swiper/modules";
import { dummyTestimony } from "@/app/data/dummyTestimony";
import { Swiper, SwiperSlide } from "swiper/react";

function TestimonySection() {
	const testimonies = dummyTestimony;

	return (
		<div className="w-full flex justify-center">
			<div className="w-[750px] flex flex-col gap-8">
				<div className="flex flex-col gap-5">
					<h1 className="text-7xl text-center font-semibold">
						THEIR TESTIMONIES
					</h1>
					<p className="text-center font-sans text-xl font-light leading-tight">
						We are a community of believers who have experienced the
						love and grace of God in our lives. Here are some of the
						testimonies from our members, sharing their personal
						experiences and how God has transformed their lives.
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
					{testimonies.map((testimony) => (
						<SwiperSlide
							className="bg-primary text-secondary font-sans px-12 py-8"
							key={testimony.id}
						>
							<div className="flex flex-col justify-center items-center h-full">
								<p className="text-xl max-w-full w-full line-clamp-3 max-h-24 mb-6 font-light overflow-hidden text-ellipsis text-center leading-6">
									&ldquo;{testimony.testimony}&rdquo;
								</p>
								<div className="flex flex-col text-center">
									<p className="font-semibold text-xl">
										{testimony.writer}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default TestimonySection;
