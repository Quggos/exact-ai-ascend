import {
	PlayCircle,
	Workflow,
	Code,
	GraduationCap,
	LineChart,
} from 'lucide-react';
import { ButtonHoverEffect } from '../ui/button-hover-effect';

interface IntegrationProcessProps {
	scrollToSection: (id: string) => void;
}

export const IntegrationProcess = ({
	scrollToSection,
}: IntegrationProcessProps) => {
	return (
		<section
			id="how-it-works"
			className=" bg-black px-4 sm:px-6 py-16 sm:py-24"
		>
			<div className="lg:container md:container mx-auto">
				<div className="text-center mb-12 sm:mb-16 lg:mb-20">
					<h2 className="text-4xl sm:text-5xl pb-1 md:text-6xl lg:text-7xl font-medium text-gradient tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
						How it works
					</h2>
					<p className="text-white/70 max-w-3xl mx-auto text-base sm:text-lg md:text-3xl">
						What ChatBot integration looks likeSchedule a free demo and explore
						how our AI ChatBot fits into your business — from customer support
						to lead generation, we tailor it all to your goals.
					</p>
				</div>

				<div className="space-y-6">
					{/* First row */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Step 1 */}
						<div className="bg-zinc-900/50 rounded-2xl p-6 sm:p-8 relative border border-zinc-800/50">
							<div className="flex flex-col items-start">
								<div className="w-12 h-12 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#FFA4A4] to-[#EB2525]">
									<div className="w-full h-full flex items-center justify-center">
										<PlayCircle className="w-6 h-6 text-white" />
									</div>
								</div>
								<div className="absolute top-6 right-6 text-6xl font-bold text-zinc-800 opacity-80">
									1
								</div>
								<h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
									Free Demo & Consultation
								</h3>
								<p className="text-white/60 text-base sm:text-lg">
									We kick things off with a short live demo to show how the
									ChatBot actually works. Then we run a discovery session to
									understand your use case, workflows, and what success would
									look like.
								</p>
							</div>
						</div>

						{/* Step 2 */}
						<div className="bg-zinc-900/50 rounded-2xl p-6 sm:p-8 relative border border-zinc-800/50">
							<div className="flex flex-col items-start">
								<div className="w-12 h-12 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#FFA4A4] to-[#EB2525]">
									<div className="w-full h-full flex items-center justify-center">
										<Workflow className="w-6 h-6 text-white" />
									</div>
								</div>
								<div className="absolute top-6 right-6 text-6xl font-bold text-zinc-800 opacity-80">
									2
								</div>
								<h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
									Conversation Flow Design
								</h3>
								<p className="text-white/60 text-base sm:text-lg">
									We design your chatbot’s logic, tone, and replies — all
									aligned with your brand voice and customer journey. Every
									message is written to convert, solve, or engage.
								</p>
							</div>
						</div>
					</div>

					{/* Second row */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Step 3 */}
						<div className="bg-zinc-900/50 rounded-2xl p-6 sm:p-8 relative border border-zinc-800/50">
							<div className="flex flex-col items-start">
								<div className="w-12 h-12 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#FFA4A4] to-[#EB2525]">
									<div className="w-full h-full flex items-center justify-center">
										<Code className="w-6 h-6 text-white" />
									</div>
								</div>
								<div className="absolute top-6 right-6 text-6xl font-bold text-zinc-800 opacity-80">
									3
								</div>
								<h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
									Bot Setup & System Integration
								</h3>
								<p className="text-white/60 text-base sm:text-lg">
									Our team builds and connects the ChatBot to your website, CRM,
									helpdesk, or any tools you use. Everything is tailored — no
									templates, no coding needed from your side.
								</p>
							</div>
						</div>

						{/* Step 4 */}
						<div className="bg-zinc-900/50 rounded-2xl p-6 sm:p-8 relative border border-zinc-800/50">
							<div className="flex flex-col items-start">
								<div className="w-12 h-12 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#FFA4A4] to-[#EB2525]">
									<div className="w-full h-full flex items-center justify-center">
										<GraduationCap className="w-6 h-6 text-white" />
									</div>
								</div>
								<div className="absolute top-6 right-6 text-6xl font-bold text-zinc-800 opacity-80">
									4
								</div>
								<h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
									Team Onboarding & Launch
								</h3>
								<p className="text-white/60 text-base sm:text-lg">
									We train your team on how to use the bot, update replies, and
									track performance. Then we go live — with your custom chatbot
									up and running on your platform.
								</p>
							</div>
						</div>

						{/* Step 5 */}
						<div className="bg-zinc-900/50 rounded-2xl p-6 sm:p-8 relative border border-zinc-800/50">
							<div className="flex flex-col items-start">
								<div className="w-12 h-12 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#FFA4A4] to-[#EB2525]">
									<div className="w-full h-full flex items-center justify-center">
										<LineChart className="w-6 h-6 text-white" />
									</div>
								</div>
								<div className="absolute top-6 right-6 text-6xl font-bold text-zinc-800 opacity-80">
									5
								</div>
								<h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
									Ongoing Improvements & Support
								</h3>
								<p className="text-white/60 text-base sm:text-lg">
									We monitor usage, improve responses, and support you
									long-term. Expect reports, insights, and hands-on help — your
									bot gets smarter with every interaction.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-row justify-center gap-4 mt-12 sm:mt-16">
					<ButtonHoverEffect className="w-fit">
						<button
							onClick={() => (window.location.href = '/book-call')}
							className="px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors border-2 border-transparent bg-clip-padding"
							style={{
								backgroundImage:
									'linear-gradient(black, black), linear-gradient(to right, #FFA57A, #FC576E)',
								backgroundOrigin: 'border-box',
								backgroundClip: 'padding-box, border-box',
							}}
						>
							Book a Call
						</button>
					</ButtonHoverEffect>
				</div>

				<p className="text-white/50 text-center text-xs sm:text-sm mt-6 sm:mt-8">
					* Implementation begins at $4,000 with flexible pricing based on your
					requirements
				</p>
			</div>
		</section>
	);
};
