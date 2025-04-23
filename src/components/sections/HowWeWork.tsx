export const HowWeWork = () => {
	return (
		<section
			id="how-we-work"
			className="section-padding bg-black px-4 sm:px-6 py-16 sm:py-24"
		>
			<div className="container mx-auto">
				<div className="text-center mb-12 sm:mb-16 md:mb-24">
					<p className="text-white/60 text-xl sm:text-2xl md:text-3xl tracking-[-0.02em] font-medium mb-2 sm:mb-3">
						How We Work
					</p>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-[-0.02em] text-white leading-tight sm:leading-tight px-2">
						To build products{' '}
						<span className="text-[#C1844D]">people love</span>, we created an
						environment where <span className="text-[#EB6F6F]">passionate</span>{' '}
						people thrive
					</h2>
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
								The Right People
							</h3>
							<p className="text-white/70 text-base sm:text-xl md:text-2xl leading-relaxed tracking-[-0.02em]">
								We want to work with self-starters who can take the initiative
								and solve problems independently with minimal direction. By
								giving our people the space they need and providing them with
								the most innovative tools, we trust them to do their part.
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
								State-of-the-art Tech
							</h3>
							<p className="text-white/70 text-base sm:text-xl md:text-2xl leading-relaxed tracking-[-0.02em]">
								In our field, having a data-driven culture is essential for
								success. Data empowers us to be more efficient and more precise,
								that's why we live and breathe data. To support our brilliant
								minds, we continuously build tech and data tools helping them
								make well-informed decisions.
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
								Shared Values
							</h3>
							<p className="text-white/70 text-base sm:text-xl md:text-2xl leading-relaxed tracking-[-0.02em] mb-4">
								At HubX, we believe in cultivating a culture with strong shared
								values that serve a specific vision and strategy — that is our
								magic formula.
							</p>
							<p className="text-white/70 text-base sm:text-xl md:text-2xl leading-relaxed tracking-[-0.02em]">
								We seek out partners who share our passion, not employees. And
								we work tirelessly to provide turbo-charged careers for
								outstanding people who truly care about their work and making a
								positive impact.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
