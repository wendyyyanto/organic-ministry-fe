import { teachingVideos } from "@/app/data/teachingVideos";

const TeachingsPage = () => {
	const teachings = teachingVideos;

	return (
		<div className="w-full h-full flex flex-col py-48 px-12">
			<h1 className="text-6xl font-bold">Teachings</h1>
			<div className="flex gap-10 mt-14 bg-primary"></div>
		</div>
	);
};

export default TeachingsPage;
