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
			className=" bg-[#fafafa] relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24"
		>
			<div className="lg:container md:container mx-auto relative z-10">
				<div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-24">
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
						Features That Do More
						<br />
						Than Just Chat
					</h2>
					<p className="text-black/80 font-regular leading-relaxed tracking-[-0.02em] text-lg sm:text-xl md:text-3xl px-2 sm:px-0">
						It’s not a basic support bot. It’s your always-on, business-smart
						assistant — trained to qualify leads, handle requests, and scale
						conversations with ease.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* First row with larger feature cards */}
					<div className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
						<div className="flex items-start mb-4">
							<div className="min-w-[48px] w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center mr-4">
								<BrainCircuit className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-lg sm:text-2xl font-semibold text-black">
								Smart Intent Detection
							</h3>
						</div>
						<p className="text-black/80 text-base sm:text-lg">
							Smart Intent DetectionUnderstands the customer’s goal — whether
							it’s booking, asking, complaining, or buying — and responds
							accordingly, even with vague or mixed messages.
						</p>
					</div>

					<div className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
						<div className="flex items-start mb-4">
							<div className="min-w-[48px] w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center mr-4">
								<Globe className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-lg sm:text-2xl font-semibold text-black">
								Multi-Lingual
							</h3>
						</div>
						<p className="text-black/80 text-base sm:text-lg">
							Multi-Language SupportSpeaks and understands over 100 languages
							instantly. No setup needed. Switches between them fluidly
							depending on the customer — perfect for global businesses.
						</p>
					</div>

					<div className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
						<div className="flex items-start mb-4">
							<div className="min-w-[48px] w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center mr-4">
								<Zap className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-lg sm:text-2xl font-semibold text-black">
								CRM & Calendar Integration
							</h3>
						</div>
						<p className="text-black/80 text-base sm:text-lg">
							CRM & Calendar IntegrationConnects to your tools — HubSpot,
							Salesforce, Zoho, Google Calendar, and more. Every chat becomes a
							lead, booking, or contact update. No copy-pasting needed.
						</p>
					</div>

					<div className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
						<div className="flex items-start mb-4">
							<div className="min-w-[48px] w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center mr-4">
								<MessageSquareDot className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-lg sm:text-2xl font-semibold text-black">
								Weekly Executive Report
							</h3>
						</div>
						<p className="text-black/80 text-base sm:text-lg">
							Weekly Manager ReportSends your team a weekly summary: leads
							captured, issues flagged, response accuracy, and more — so
							managers stay informed without checking dashboards.
						</p>
					</div>

					{/* Second row with smaller feature cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div className="group relative bg-white border border-gray-200 rounded-2xl p-5 sm:p-4">
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 min-h-[48px] rounded-2xl bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center mb-4">
									<Database className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-lg text-black/80 text-center">
									Context-Aware Follow-Ups
								</h3>
							</div>
						</div>

						<div className="group relative bg-white border border-gray-200 rounded-2xl p-5 sm:p-4">
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 min-h-[48px] rounded-2xl bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center mb-4">
									<BarChart3 className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-lg text-black/80 text-center">
									Real-Time Lead Capture & Qualification
								</h3>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div className="group relative bg-white border border-gray-200 rounded-2xl p-5 sm:p-4">
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 min-h-[48px] rounded-2xl bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center mb-4">
									<BrainCircuit className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-lg text-black/80 text-center">
									Fully Customizable Logic & Personality
								</h3>
							</div>
						</div>

						<div className="group relative bg-white border border-gray-200 rounded-2xl p-5 sm:p-4">
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 min-h-[48px] rounded-2xl bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center mb-4">
									<Globe className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-lg text-black/80 text-center">
									Secure Data Handling
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
