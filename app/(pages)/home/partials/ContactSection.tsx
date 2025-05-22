import Divider from "@/app/components/Divider";

function ContactSection() {
	return (
		<div className="w-full px-16 flex flex-col gap-16">
			<Divider />

			<div className="w-full h-[500px] flex items-center">
				<div className="w-1/2 flex flex-col gap-5 items-center text-center">
					<h1 className="font-semibold text-7xl">SHARE YOUR STORY</h1>
					<p className="font-sans text-xl font-light max-w-lg leading-6">
						of experiencing God in your life, personal moment with
						God, or ask us anything regarding our activities and
						events. Don’t worry, we respect your privacy.
					</p>
				</div>
				<div className="w-2/5 h-full bg-primary flex flex-col gap-8 px-4 py-8">
					<form
						onSubmit={() => {}}
						className="flex flex-col flex-1 gap-3 font-sans font-light text-secondary"
					>
						<input
							placeholder="your name..."
							type="text"
							className="border border-x-0 border-t-0 border-secondary bg-transparent placeholder-secondary py-3 focus:border-secondary"
						/>
						<input
							placeholder="your email address (example@email.com)"
							type="text"
							className="border border-x-0 border-t-0 border-secondary bg-transparent placeholder-secondary py-3 focus:border-secondary"
						/>
						<textarea
							className="flex flex-col flex-1 items-end bg-transparent border border-x-0 border-t-0 border-secondary focus:border-secondary placeholder-secondary"
							placeholder="your testimony/story"
						/>
					</form>
					<div className="bg-secondary flex justify-center items-center cursor-pointer">
						<p className="text-2xl font-bold py-2">SEND</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
