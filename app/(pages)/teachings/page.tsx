import { teachingRecordings } from "@/app/data/teachingRecordings";

const TeachingsPage = () => {
	const teachings = teachingRecordings;

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center pt-36 pb-12 px-12">
			<h1 className="absolute top-32 text-6xl font-bold uppercase text-center w-min">
				Teaching Recordings
			</h1>
			<div className="flex gap-10 mt-16 w-full h-full bg-secondary"></div>
		</div>
	);
};

export default TeachingsPage;
