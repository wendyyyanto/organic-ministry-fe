import { teachingRecordings } from "@/app/data/teachingRecordings";
import TeachingFolder from "./components/TeachingFolder";

const TeachingsPage = () => {
	const teachings = teachingRecordings;

	return (
		<div className="pb-20 px-12">
			<div className="w-full h-screen flex flex-col items-center justify-center pt-36 pb-12 trigger-background">
				<h1 className="absolute top-32 text-8xl z-50 font-bold uppercase text-center w-min max-sm:text-5xl max-lg:text-6xl">
					Teaching Recordings
				</h1>
				<div className="relative pt-28 max-sm:pt-16 max-lg:pt-20 w-full h-full">
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
			<div className="mt-40 flex max-lg:flex-col max-lg:items-center gap-40 max-xl:gap-28 max-lg:gap-16 w-full h-full ">
				<h1 className="font-bold text-6xl max-md:text-4xl">
					Directories
				</h1>
				<div className="grid grid-cols-4 max-3xl:grid-cols-3 max-2xl:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-10 flex-1">
					{teachings.map((teaching) => (
						<TeachingFolder teaching={teaching} key={teaching.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TeachingsPage;
