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
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
						Where ChatBot Delivers Real Value
					</h2>
					<p className="text-black/60 leading-relaxed sm:leading-12 tracking-[-0.02em] text-base sm:text-xl md:text-3xl">
						Smart automation for the messages your team shouldn't handle — from
						instant support replies to sales conversations and everything in
						between.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{/* Customer Support Card */}
					<div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center flex flex-col h-full">
						<div className="flex-grow">
							<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
								<img
									src="/frame-71.png"
									alt="Customer Support"
									className="w-full h-full object-contain"
								/>
							</div>
							<h3 className="text-3xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
								Customer Support
							</h3>
							<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Instantly answers repetitive customer questions
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Collects key details, opens support tickets
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Handles unlimited chats at once
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Escalates complex issues to a real agent
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Remembers returning users for smoother help
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Available 24/7 in over 100 languages
									</span>
								</li>
							</ul>
						</div>
						<div className="mt-auto">
							<a
								href="/book-call"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 text-lg sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
							>
								Apply Now
							</a>
						</div>
					</div>

					{/* Sales Card */}
					<div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center flex flex-col h-full">
						<div className="flex-grow">
							<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
								<img
									src="/frame-73.png"
									alt="Sales"
									className="w-full h-full object-contain"
								/>
							</div>
							<h3 className="text-3xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
								Sales
							</h3>
							<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Qualifies leads through smart questions
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Engages site visitors in real time
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Books meetings directly to your calendar
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Sends follow-ups and product info
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Seamlessly integrates with your CRM
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Boosts conversions without extra headcount
									</span>
								</li>
							</ul>
						</div>
						<div className="mt-auto">
							<a
								href="/book-call"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 text-lg sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
							>
								Apply Now
							</a>
						</div>
					</div>

					{/* Customized Solution Card */}
					<div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center sm:col-span-2 lg:col-span-1 flex flex-col h-full">
						<div className="flex-grow">
							<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
								<img
									src="/frame-72.png"
									alt="Customized Solution"
									className="w-full h-full object-contain"
								/>
							</div>
							<h3 className="text-3xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
								Customized solution
							</h3>
							<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Built around your workflow (HR, billing, onboarding, etc.)
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Chat flows personalized to your tone and logic
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Works across site, app, or WhatsApp
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Supports internal teams or external clients
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Inbound, outbound, or both — your choice
									</span>
								</li>
								<li className="flex items-center justify-start gap-2">
									<span className="text-blue-500">✓</span>
									<span className="text-black/70 text-md sm:text-base text-left tracking-[-0.02em]">
										Fully managed and updated by our team
									</span>
								</li>
							</ul>
						</div>
						<div className="mt-auto">
							<a
								href="/book-call"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 text-lg sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
							>
								Apply Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
