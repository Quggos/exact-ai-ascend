export const HowWeWork = () => {
	return (
		<section
			id="how-we-work"
			className="section-padding bg-black px-4 sm:px-6 py-16 sm:py-24"
		>
			<div className="container mx-auto">
				<div className="text-center mb-12 sm:mb-16 md:mb-24">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-[-0.02em] text-white leading-tight sm:leading-tight px-2 mb-4 sm:mb-6 md:mb-8">
						Never Miss a{' '}
						<span
							style={{
								background:
									'linear-gradient(to right, rgb(255, 165, 122), rgb(252, 87, 110))',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								color: 'transparent',
							}}
						>
							Lead
						</span>{' '}
						Again
					</h2>
					<p className="text-white max-w-6xl mx-auto font-medium leading-relaxed sm:leading-12 tracking-[-0.02em] text-base sm:text-xl md:text-2xl">
						No voicemails. No dropped calls. No missed opportunities. Every
						caller gets an immediate response, even outside working hours —
						turning lost chances into captured leads.
					</p>
				</div>

				<div className="space-y-16 sm:space-y-24 md:space-y-32">
					{/* The Right People */}
					<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
						<div className="w-full md:w-1/2 flex justify-center items-center">
							<img
								src="/temp-image.png"
								alt="Team member"
								className="w-full max-w-[300px] md:max-w-[400px] lg:w-96"
							/>
						</div>
						<div className="w-full md:w-1/2 mt-6 md:mt-0">
							<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-gradient mb-4 sm:mb-6 pb-1">
								Answer 100% of inbound calls, instantly
							</h3>
							<p className="text-white/70 text-base sm:text-xl md:text-2xl leading-relaxed tracking-[-0.02em]">
								No voicemails. No dropped calls. No missed opportunities. Every
								caller gets an immediate response, even outside working hours —
								turning lost chances into captured leads.
							</p>
						</div>
					</div>

					{/* State-of-the-art Tech */}
					<div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
						<div className="w-full md:w-1/2 flex justify-center items-center">
							<img
								src="/temp-image.png"
								alt="Laptop"
								className="w-full max-w-[300px] md:max-w-[400px] lg:w-96"
							/>
						</div>
						<div className="w-full md:w-1/2 mt-6 md:mt-0">
							<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-gradient mb-4 sm:mb-6 pb-1">
								Handle 90% of Customer Queries
							</h3>
							<p className="text-white/70 text-base sm:text-xl md:text-2xl leading-relaxed tracking-[-0.02em]">
								Let your voicebot take care of the repetitive stuff — instantly
								answering common questions, guiding callers, and escalating when
								needed. It frees up your team and makes customers feel heard
								faster.
							</p>
						</div>
					</div>

					{/* Shared Values */}
					<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
						<div className="w-full md:w-1/2 flex justify-center items-center">
							<img
								src="/temp-image.png"
								alt="Team"
								className="w-full max-w-[300px] md:max-w-[400px] lg:w-96"
							/>
						</div>
						<div className="w-full md:w-1/2 mt-6 md:mt-0">
							<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-gradient mb-4 sm:mb-6 pb-1">
								Get Reports Your CEO Will Love
							</h3>
							<p className="text-white/70 text-base sm:text-xl md:text-2xl leading-relaxed tracking-[-0.02em] mb-4">
								Real-time dashboards that show exactly what's happening: calls
								handled, leads qualified, issues flagged, and more. Delivered
								daily or weekly — clear, customized insights without the
								clutter.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
