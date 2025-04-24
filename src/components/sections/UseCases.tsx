interface UseCasesProps {
	scrollToSection: (id: string) => void;
}

export const UseCases = ({ scrollToSection }: UseCasesProps) => {
	return (
		<section
			id="use-cases"
			className="bg-[#fafafa] text-black px-4 sm:px-6 py-16 sm:py-24"
		>
			<div className="lg:container md:container mx-auto">
				<div className="text-center max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
					<h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
						Where{' '}
						<span className="bg-gradient-to-r from-[#DE7373] via-[#7A3D91] to-[#87448D] text-transparent bg-clip-text">
							VoiceBot
						</span>{' '}
						Works Best
					</h2>
					<p className="text-black/50 font-medium leading-relaxed sm:leading-12 tracking-[-0.02em] text-base sm:text-xl md:text-2xl">
						Smart automation for the tasks that drain your time — from handling
						support calls to making outbound sales and everything in between.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{/* Customer Support Card */}
					<div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
						<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
							<img
								src="/cube-hollow.png"
								alt="Customer Support"
								className="w-full h-full object-contain"
							/>
						</div>
						<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
							Customer Support
						</h3>
						<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Answers common questions automatically
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Takes notes, creates tickets, routes calls
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Handles high volumes with zero wait time
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Detects frustration & escalates smartly
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Available 24/7, speaks multiple languages
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Can call back missed customers if needed
								</span>
							</li>
						</ul>
						<button
							onClick={() => scrollToSection('demo')}
							className="text-blue-500 text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
						>
							Apply Now
						</button>
					</div>

					{/* Sales Card */}
					<div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
						<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
							<img
								src="/cube-shape.png"
								alt="Sales"
								className="w-full h-full object-contain"
							/>
						</div>
						<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
							Sales
						</h3>
						<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Makes outbound calls and follows up leads
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Qualifies prospects with smart conversations
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Books meetings straight to your calendar
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Handles cold outreach with perfect scripts
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Works alongside your team — not instead of
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Connects to your CRM in real time
								</span>
							</li>
						</ul>
						<button
							onClick={() => scrollToSection('demo')}
							className="text-blue-500 text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
						>
							Apply Now
						</button>
					</div>

					{/* Customized Solution Card */}
					<div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center sm:col-span-2 lg:col-span-1">
						<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
							<img
								src="/star.png"
								alt="Customized Solution"
								className="w-full h-full object-contain"
							/>
						</div>
						<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
							Customized solution
						</h3>
						<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									HR screening, appointment reminders, surveys
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Order status updates or billing automation
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Voice workflows built around your process
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Full control over tone, logic, and scripts
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									Inbound, outbound — or both
								</span>
							</li>
							<li className="flex items-center justify-start gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base text-left tracking-[-0.02em]">
									We build and maintain it all for you
								</span>
							</li>
						</ul>
						<button
							onClick={() => scrollToSection('demo')}
							className="text-blue-500 text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
						>
							Apply Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
