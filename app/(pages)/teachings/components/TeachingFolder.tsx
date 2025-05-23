import Link from "next/link";
import { PiFolderSimpleFill } from "react-icons/pi";

interface TeachingFolderProps {
	id: number;
	title: string;
	directoryUrl: string;
	thumbnailUrl: string;
}

const TeachingFolder = ({ teaching }: { teaching: TeachingFolderProps }) => (
	<Link
		href={teaching.directoryUrl}
		target="_blank"
		className="h-fit w-full flex cursor-pointer relative"
	>
		<div className="absolute top-0 left-0 -z-10 bg-secondary w-full h-full"></div>
		<div className="bg-primary px-10 py-4 w-full hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 flex items-center justify-start gap-10 text-secondary will-change-transform">
			<PiFolderSimpleFill className="text-4xl" />
			<h1 className="text-xl font-bold">{teaching.title}</h1>
		</div>
	</Link>
);

export default TeachingFolder;
