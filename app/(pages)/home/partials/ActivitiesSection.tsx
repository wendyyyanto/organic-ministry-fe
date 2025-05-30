import moment from "moment";
import { dummySchedule } from "@/app/data/dummySchedule";
import Divider from "@/app/components/Divider";
import { Fragment } from "react";
import Link from "next/link";

function ActivitiesSection() {
	return (
		<div className="flex max-xl:flex-col gap-28 px-12">
			<h1 className="text-primary max-xl:text-5xl text-7xl w-80 font-semibold uppercase">
				Upcoming Activities
			</h1>
			<div className="pt-32 max-xl:pt-0 w-full">
				<div className="flex flex-col gap-10">
					{dummySchedule.map((schedule) => (
						<Fragment key={schedule.id}>
							<div className="flex">
								<div className="flex flex-col gap-3 flex-1">
									<h5 className="text-3xl max-xl:text-2xl">
										{schedule.initiator}
									</h5>
									<h3 className="text-5xl max-xl:text-4xl font-semibold">
										{schedule.event_name}
									</h3>
								</div>
								<h5 className="text-4xl max-xl:text-3xl font-medium w-40 text-right">
									{moment(schedule.start_date).format(
										"Do MMM HH.mm A"
									)}
								</h5>
							</div>
							<Divider />
						</Fragment>
					))}
				</div>
				<div className="flex justify-center items-center mt-10">
					<Link
						href="/under-construction"
						className="flex justify-center items-center max-xl:px-3 px-5 py-5 bg-primary text-secondary w-1/2 cursor-pointer"
						onClick={() => {}}
					>
						<h3 className="uppercase text-3xl max-xl:text-2xl font-bold tracking-wider">
							see all activities
						</h3>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ActivitiesSection;
