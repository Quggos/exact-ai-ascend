import { ExactLogo } from '@/components/ExactLogo';

export const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<footer className="glass-morphism border-t border-white/5 py-8 sm:py-12">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
					<div className="col-span-2 sm:col-span-2 md:col-span-1 mb-4 sm:mb-0">
						<button
							onClick={scrollToTop}
							className="block mb-4 hover:opacity-90 transition-opacity cursor-pointer"
							aria-label="Scroll to top"
						>
							<ExactLogo className="w-[140px] sm:w-auto" />
						</button>
						<p className="text-xs sm:text-sm text-muted-foreground">
							Transforming business communication with advanced AI text chat
							assistants.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
							Solutions
						</h4>
						<ul className="space-y-1.5 sm:space-y-2">
							<li>
								<a
									href="#use-cases"
									className="text-xs sm:text-sm text-muted-foreground hover:text-[#FC576E] transition-colors"
								>
									Customer Support AI
								</a>
							</li>
							<li>
								<a
									href="#use-cases"
									className="text-xs sm:text-sm text-muted-foreground hover:text-[#FC576E] transition-colors"
								>
									Sales AI Assistant
								</a>
							</li>
							<li>
								<a
									href="#use-cases"
									className="text-xs sm:text-sm text-muted-foreground hover:text-[#FC576E] transition-colors"
								>
									Custom AI Solutions
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
							Company
						</h4>
						<ul className="space-y-1.5 sm:space-y-2">
							<li>
								<a
									href="#"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Partners
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Careers
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
							Contact
						</h4>
						<ul className="space-y-1.5 sm:space-y-2">
							<li>
								<a
									href="#next-steps"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Schedule a Call
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Support
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									hello@exactai.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/5 mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center">
					<p className="text-xs text-muted-foreground mb-4 sm:mb-0">
						© 2025 EXACT AI. All rights reserved.
					</p>
					<div className="flex space-x-4">
						<a
							href="#"
							className="text-xs text-muted-foreground hover:text-primary transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-xs text-muted-foreground hover:text-primary transition-colors"
						>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
