import Divider from "@/app/components/Divider";

function FooterSection() {
	return (
		<div className="w-full flex flex-col h-[400px] items-center justify-between">
			<Divider />

			<div className="w-full flex justify-between items-center">
				<h1 className="text-8xl font-bold">
					ORGANIC <br /> MINISTRY.
				</h1>
				<div className="flex flex-col gap-2 text-xl text-center">
					<p className="font-normal w-[550px]">
						“ If you declare with your mouth, “Jesus is Lord,” and
						believe in your heart that God raised him from the
						dead, you will be saved. “
					</p>
					<p className="font-semibold">Romans 10 : 9</p>
				</div>
			</div>
		</div>
	);
}

export default FooterSection;
