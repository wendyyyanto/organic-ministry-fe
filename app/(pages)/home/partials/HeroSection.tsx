import Link from "next/link";

function HeroSection() {
	return (
		<div className="w-screen h-screen px-12 flex items-center justify-start trigger-background">
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
				<h1 className="text-[174px] max-lg:w-min max-lg:leading-20	 max-lg:text-7xl max-2xl:text-9xl max-w-3xl font-bold leading-[162px] max-2xl:leading-32 text-secondary">
					ORGANIC MINISTRY.
				</h1>
				<div className="flex flex-col gap-10 text-secondary">
					<p className="font-sans max-lg:text-lg font-light text-xl leading-tight">
						Welcome to Organic Ministry — a non-traditional,
						non-denominational house church where evangelism and
						discipleship happen through authentic, loving community.
						Rooted in the Great Commission and the call to love one
						another, we exist to help young people grow in faith,
						live out their calling, and build meaningful
						relationships centered on Christ. Whether you&apos;re
						exploring faith or seeking deeper discipleship, you are
						welcome here.
					</p>
					<Link
						href="/under-construction"
						className="w-fit flex justify-center items-center font-bold text-3xl max-lg:text-2xl max-lg:px-10 text-primary bg-secondary py-4 px-16 gap-11 cursor-pointer tracking-wider"
					>
						OUR ACTIVITIES
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
