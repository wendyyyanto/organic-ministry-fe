import { teachingRecordings } from "@/app/data/teachingRecordings";

const TeachingsPage = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const teachings = teachingRecordings;

	return (
		<div className="pb-20 px-12">
			<div className="w-full h-screen flex flex-col items-center justify-center pt-36 pb-12 trigger-background">
				<h1 className="absolute top-32 text-8xl z-50 font-bold uppercase text-center w-min">
					Teaching Recordings
				</h1>
				<div className="relative pt-28 w-full h-full">
					<video
						className="w-full h-full object-cover brightness-50 saturate-50"
						autoPlay
						loop
						muted
					>
						<source src="/assets/videos/banner_video.mp4" />
					</video>
				</div>
			</div>
			<div className="mt-40 flex gap-10 w-full h-full">
				<h1 className="font-bold text-6xl">Directories</h1>
				<div className="grid grid-cols-4 gap-10 flex-1">
					<div className="h-[170px] w-full bg-primary"></div>
					<div className="h-[170px] w-full bg-primary"></div>
					<div className="h-[170px] w-full bg-primary"></div>
					<div className="h-[170px] w-full bg-primary"></div>
					<div className="h-[170px] w-full bg-primary"></div>
					<div className="h-[170px] w-full bg-primary"></div>
					<div className="h-[170px] w-full bg-primary"></div>
					<div className="h-[170px] w-full bg-primary"></div>
					<div className="h-[170px] w-full bg-primary"></div>
				</div>
			</div>
		</div>
	);
};

export default TeachingsPage;
