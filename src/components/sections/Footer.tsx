import { NextLogo } from '@/components/NextLogo';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<footer className="bg-black border-t border-white/10 py-8 sm:pt-12">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
					<div className="mb-4 max-w-xs sm:mb-0">
						<button
							onClick={scrollToTop}
							className="block mb-4 hover:opacity-90 transition-opacity cursor-pointer"
							aria-label="Scroll to top"
						>
							<NextLogo className="w-[82px] sm:w-[98px]" />
						</button>
						<p className="text-xs sm:text-sm text-muted-foreground mb-4">
							Transforming business communication with advanced AI text chat
							assistants.
						</p>
						<div className="flex items-center gap-4">
							<SocialIcon
								url="https://facebook.com/61574399337370/"
								target="_blank"
								style={{ height: 30, width: 30 }}
								fgColor="#ffffff"
								bgColor="transparent"
								className="hover:opacity-80 transition-colors"
							/>
							<SocialIcon
								url="https://linkedin.com/company/exct"
								target="_blank"
								style={{ height: 30, width: 30 }}
								fgColor="#ffffff"
								bgColor="transparent"
								className="hover:opacity-80 transition-colors"
							/>
						</div>
					</div>

					<div>
						<h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
							Company
						</h4>
						<ul className="space-y-1.5 sm:space-y-2">
							<li>
								<Link
									to="/about-us"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/contact-us"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<a
									href="/book-call"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Book a Call
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
							Legal
						</h4>
						<ul className="space-y-1.5 sm:space-y-2">
							<li>
								<Link
									to="/privacy-policy"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms-of-service"
									className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/5 mt-8 sm:mt-12 pt-4 sm:pt-6 flex justify-center">
					<p className="text-xs text-muted-foreground">
						© 2025 NEXT APP. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
