interface UseCasesProps {
	scrollToSection: (id: string) => void;
}

export const UseCases = ({ scrollToSection }: UseCasesProps) => {
	return (
		<section
			id="use-cases"
			className="section-padding bg-[#fafafa] text-black px-4 sm:px-6 py-16 sm:py-24"
		>
			<div className="container mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
					<p className="text-black text-lg sm:text-xl md:text-3xl tracking-[-0.02em] font-semibold mb-2 sm:mb-3">
						Investments & Publishing
					</p>
					<h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
						We enable <br className="hidden sm:block" />
						entrepreneurship
					</h2>
					<p className="text-black font-medium leading-relaxed sm:leading-12 tracking-[-0.02em] text-base sm:text-xl md:text-2xl">
						In addition to supporting our in-house studios, we are always
						looking to extend our resources to promising new projects in our
						ecosystem. Our focus is on mobile apps and games, but we are also
						evaluating opportunities in other exciting fields.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{/* Customer Support Card */}
					<div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
						<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
							<img
								src="/card-icon.png"
								alt="Customer Support"
								className="w-full h-full object-contain"
							/>
						</div>
						<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
							Customer Support
						</h3>
						<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Focus on growth and improvement
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Embrace challenges as learning
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Cultivate a positive mindset
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Build relationships with people
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Set clear goals and create plans
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Practice mindfulness and self-care
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Celebrate small victories
								</span>
							</li>
						</ul>
						<button
							onClick={() => scrollToSection('demo')}
							className="text-blue-500 text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
						>
							Call To Action
						</button>
					</div>

					{/* Sales Card */}
					<div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center">
						<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
							<img
								src="/card-icon.png"
								alt="Sales"
								className="w-full h-full object-contain"
							/>
						</div>
						<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
							Sales
						</h3>
						<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Focus on growth and improvement
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Embrace challenges as learning
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Cultivate a positive mindset
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Build relationships with people
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Set clear goals and create plans
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Practice mindfulness and self-care
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Celebrate small victories
								</span>
							</li>
						</ul>
						<button
							onClick={() => scrollToSection('demo')}
							className="text-blue-500 text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
						>
							Call To Action
						</button>
					</div>

					{/* Customized Solution Card */}
					<div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center sm:col-span-2 lg:col-span-1">
						<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6">
							<img
								src="/card-icon.png"
								alt="Customized Solution"
								className="w-full h-full object-contain"
							/>
						</div>
						<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
							Customized solution
						</h3>
						<ul className="text-center space-y-1 mb-6 sm:mb-8 md:mb-12">
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Focus on growth and improvement
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Embrace challenges as learning
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Cultivate a positive mindset
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Build relationships with people
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Set clear goals and create plans
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Practice mindfulness and self-care
								</span>
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-blue-500">✓</span>
								<span className="text-black/70 text-sm sm:text-base tracking-[-0.02em]">
									Celebrate small victories
								</span>
							</li>
						</ul>
						<button
							onClick={() => scrollToSection('demo')}
							className="text-blue-500 text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:underline"
						>
							Call To Action
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
