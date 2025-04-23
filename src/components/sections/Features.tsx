import {
	BrainCircuit,
	Globe,
	Zap,
	MessageSquareDot,
	Database,
	BarChart3,
} from 'lucide-react';

export const Features = () => {
	return (
		<section
			id="features"
			className="section-padding bg-black relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24"
		>
			<div className="container mx-auto relative z-10">
				<div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-24">
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
						Features That Drive <span className="text-[#FF6B6B]">Results.</span>{' '}
						<br />
						Not Just Calls
					</h2>
					<p className="text-gray-400 font-regular leading-relaxed tracking-[-0.02em] text-lg sm:text-xl md:text-2xl px-2 sm:px-0">
						It's not just voice automation. It's smart, scalable infrastructure
						designed to solve real business problems — faster, cleaner, and more
						human.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* First row with larger feature cards */}
					<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
						<div className="flex items-start mb-4">
							<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mr-4">
								<BrainCircuit className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl sm:text-2xl font-semibold text-white">
								Emotion Detection
							</h3>
						</div>
						<p className="text-gray-400 text-base sm:text-lg">
							Understands tone, urgency, and frustration in real time — so it
							speaks calmly when tension rises, and knows when to hand off to a
							human.
						</p>
					</div>

					<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
						<div className="flex items-start mb-4">
							<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mr-4">
								<Globe className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl sm:text-2xl font-semibold text-white">
								Multi-Lingual
							</h3>
						</div>
						<p className="text-gray-400 text-base sm:text-lg">
							Supports over 100 languages and dialects with native-level
							fluency. From Mandarin to Portuguese, it adapts instantly to your
							customer's language — no manual setup.
						</p>
					</div>

					<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
						<div className="flex items-start mb-4">
							<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mr-4">
								<Zap className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl sm:text-2xl font-semibold text-white">
								CRM & Calendar Integration
							</h3>
						</div>
						<p className="text-gray-400 text-base sm:text-lg">
							Every lead, every booking, every customer update — automatically
							synced to your tools. Works seamlessly with Salesforce, HubSpot,
							Zoho, Outlook, Google Calendar, and more.
						</p>
					</div>

					<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
						<div className="flex items-start mb-4">
							<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mr-4">
								<MessageSquareDot className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-xl sm:text-2xl font-semibold text-white">
								Weekly Executive Report
							</h3>
						</div>
						<p className="text-gray-400 text-base sm:text-lg">
							Every Monday, your team receives a clear summary of performance:
							calls handled, issues flagged, leads captured. Fully customized
							for your managers — no dashboards to dig through.
						</p>
					</div>

					{/* Second row with smaller feature cards */}
					<div className="grid grid-cols-2 gap-6">
						<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
							<div className="flex flex-col items-center mb-3">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mb-4">
									<Database className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-white text-center">
									Script-Free Conversations
								</h3>
							</div>
						</div>

						<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
							<div className="flex flex-col items-center mb-3">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mb-4">
									<BarChart3 className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-white text-center">
									Context Memory Between Calls
								</h3>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
							<div className="flex flex-col items-center mb-3">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mb-4">
									<BrainCircuit className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-white text-center">
									Real-Time Lead Qualification
								</h3>
							</div>
						</div>

						<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
							<div className="flex flex-col items-center mb-3">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center mb-4">
									<Globe className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-white text-center">
									Fully Customizable to Your Workflow
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
