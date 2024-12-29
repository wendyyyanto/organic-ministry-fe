function HeroSection() {
	return (
		<div className="w-screen h-screen font-melo flex items-center justify-start">
			<video
				className="h-screen w-screen absolute top-0 left-0 -z-20 object-cover"
				autoPlay
				loop
				muted
			>
				<source src="/assets/videos/banner_video.mp4" />
			</video>
			<div className="bg-black h-screen w-screen absolute top-0 left-0 -z-10 opacity-75"></div>

			<div className="flex flex-col gap-5 max-w-2xl">
				<h1 className="text-[174px] max-w-3xl font-bold leading-[162px] text-secondary">
					ORGANIC MINISTRY.
				</h1>
				<div className="flex flex-col gap-10 text-secondary">
					<p className="font-sans font-light text-xl leading-tight">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Excepturi veritatis iure eaque ratione aspernatur
						perspiciatis dolorum? Eligendi adipisci fugiat
						perspiciatis quis dolor illum sequi molestiae,
						aspernatur harum, tenetur numquam quaerat.
					</p>
					<div className="w-fit flex justify-center items-center font-bold text-2xl text-primary bg-secondary py-4 px-16 gap-11 cursor-pointer">
						OUR SCHEDULES
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
