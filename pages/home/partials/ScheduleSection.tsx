import moment from "moment";
import { dummySchedule } from "@/app/data/dummySchedule";
import Divider from "@/app/components/Divider";
import { Fragment } from "react";

function ScheduleSection() {
	return (
		<div className="flex gap-28 font-melo">
			<h1 className="text-primary text-7xl w-80 font-semibold">
				UPCOMING EVENTS
			</h1>
			<div className="pt-32 w-full">
				<div className="flex flex-col gap-10">
					{dummySchedule.map((schedule) => (
						<Fragment key={schedule.id}>
							<div className="flex">
								<div className="flex flex-col gap-3 flex-1">
									<p className="text-3xl">
										{schedule.initiator}
									</p>
									<p className="text-5xl font-semibold">
										{schedule.event_name}
									</p>
								</div>
								<p className="text-4xl font-medium w-40 text-right">
									{moment(schedule.start_date).format(
										"Do MMM HH.mm A"
									)}
								</p>
							</div>
							<Divider />
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
}

export default ScheduleSection;
