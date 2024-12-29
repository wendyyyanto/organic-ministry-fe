import { motion } from "framer-motion";
import Image from "next/image";

type TeacherCardProps = {
	teacher: {
		name: string;
		image: string;
	};
};

function TeacherCard({ teacher }: TeacherCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			className="relative w-[300px] h-96 flex flex-col justify-end px-2 py-2 border-2 border-secondary Custom-Teacher-Card"
		>
			<Image
				src={teacher.image}
				className="w-full h-full object-cover absolute top-0 left-0 -z-10"
				alt="Teacher Image"
				width={200}
				height={200}
				priority
			/>
			<div className="bg-secondary bg-opacity-90 w-full flex flex-col justify-start items-center gap-1 px-3 py-3">
				<p className="font-bold text-3xl">{teacher.name}</p>
			</div>
		</motion.div>
	);
}

export default TeacherCard;
