import { ButtonHoverEffect } from '@/components/ui/button-hover-effect';
import { NextLogo } from '@/components/NextLogo';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';

interface HeaderProps {
	isSticky: boolean;
	scrollToSection: (id: string) => void;
}

export const Header = ({ isSticky, scrollToSection }: HeaderProps) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isMainPage, setIsMainPage] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsMainPage(window.location.pathname === '/');
	}, []);

	const toggleMobileMenu = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		if (!mobileMenuOpen) {
			// Opening menu
			setMobileMenuOpen(true);
		} else {
			// Closing menu - delay the state change to allow for animation
			setTimeout(() => {
				setMobileMenuOpen(false);
				setIsAnimating(false);
			}, 300); // Match with the animation duration
		}

		// If opening, we can set animating to false immediately
		if (!mobileMenuOpen) {
			setTimeout(() => {
				setIsAnimating(false);
			}, 300);
		}
	};

	const handleNavClick = (id: string) => {
		scrollToSection(id);

		if (mobileMenuOpen) {
			setIsAnimating(true);
			setTimeout(() => {
				setMobileMenuOpen(false);
				setIsAnimating(false);
			}, 300);
		}
	};

	// Close menu when clicking outside of it
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				mobileMenuOpen &&
				!isAnimating &&
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setIsAnimating(true);
				setTimeout(() => {
					setMobileMenuOpen(false);
					setIsAnimating(false);
				}, 300);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [mobileMenuOpen, isAnimating]);

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileMenuOpen]);

	const menuClasses = mobileMenuOpen
		? 'lg:hidden bg-black backdrop-blur-xl absolute top-full left-0 right-0 animate-fade-in border-t border-white/10'
		: 'lg:hidden bg-black backdrop-blur-xl absolute top-full left-0 right-0 animate-fade-out opacity-0 pointer-events-none border-t border-white/10';

	// Create header background classes based on screen size, menu state, and current page
	const headerBgClasses = isSticky
		? 'bg-black backdrop-blur-xl transition-all duration-300'
		: mobileMenuOpen
		? 'lg:bg-black lg:backdrop-blur-none lg:transition-all lg:duration-300 bg-black backdrop-blur-xl'
		: isMainPage
		? 'bg-transparent transition-all duration-300'
		: 'bg-black backdrop-blur-xl transition-all duration-300';

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Features', href: '/#features' },
		{ name: 'Pricing', href: '/#pricing' },
		{ name: 'Contact', href: '/contact-us' },
		{ name: 'Book Call', href: '/book-call' },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<div className={headerBgClasses}>
				<div className="container mx-auto px-4 sm:px-6 py-2">
					<div className="flex items-center justify-between">
						{/* Left section - Logo */}
						<div className="w-[64px] sm:w-[80px]">
							<a href="/" className="block hover:opacity-90 transition-opacity">
								<NextLogo />
							</a>
						</div>

						{/* Center section - Navigation for larger screens */}
						<div className="hidden lg:flex flex-1 justify-center">
							<nav className="flex space-x-8">
								<button
									onClick={() => scrollToSection('use-cases')}
									className="text-md font-medium hover:text-primary transition-colors"
								>
									Use Cases
								</button>
								<button
									onClick={() => scrollToSection('how-we-work')}
									className="text-md font-medium hover:text-primary transition-colors"
								>
									How We Work
								</button>
								<button
									onClick={() => scrollToSection('showcase')}
									className="text-md font-medium hover:text-primary transition-colors"
								>
									Showcase
								</button>
								<button
									onClick={() => scrollToSection('features')}
									className="text-md font-medium hover:text-primary transition-colors"
								>
									Features
								</button>
								<button
									onClick={() => scrollToSection('support')}
									className="text-md font-medium hover:text-primary transition-colors"
								>
									Support
								</button>
								<button
									onClick={() => scrollToSection('results')}
									className="text-md font-medium hover:text-primary transition-colors"
								>
									Results
								</button>
								<button
									onClick={() => scrollToSection('integration')}
									className="text-md font-medium hover:text-primary transition-colors"
								>
									Integration
								</button>
							</nav>
						</div>

						{/* Right section - Social icons and CTA */}
						<div className="flex items-center justify-end gap-2 sm:gap-6">
							<div className="hidden sm:flex items-center gap-4">
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

							<div className="hidden sm:block">
								<ButtonHoverEffect>
									<button
										onClick={() => (window.location.href = '/book-call')}
										className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors border-2 border-transparent bg-clip-padding"
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

							{/* Mobile menu button */}
							<button
								className="lg:hidden p-2 text-white focus:outline-none"
								onClick={toggleMobileMenu}
								disabled={isAnimating}
							>
								{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu - always render but conditionally show/hide with animation */}
			<div ref={menuRef} className={menuClasses}>
				<div className="container mx-auto px-4 py-4">
					<nav className="flex flex-col space-y-2 justify-center items-start">
						<button
							onClick={() => handleNavClick('hero')}
							className="text-md font-medium py-2 hover:text-primary transition-colors"
						>
							Home
						</button>
						<button
							onClick={() => handleNavClick('use-cases')}
							className="text-md font-medium py-2 hover:text-primary transition-colors"
						>
							Use Cases
						</button>
						<button
							onClick={() => handleNavClick('how-we-work')}
							className="text-md font-medium py-2 hover:text-primary transition-colors"
						>
							How We Work
						</button>
						<button
							onClick={() => handleNavClick('showcase')}
							className="text-md font-medium py-2 hover:text-primary transition-colors"
						>
							Showcase
						</button>
						<button
							onClick={() => handleNavClick('features')}
							className="text-md font-medium py-2 hover:text-primary transition-colors"
						>
							Features
						</button>
						<button
							onClick={() => handleNavClick('support')}
							className="text-md font-medium py-2 hover:text-primary transition-colors"
						>
							Support
						</button>
						<button
							onClick={() => handleNavClick('results')}
							className="text-md font-medium py-2 hover:text-primary transition-colors"
						>
							Results
						</button>
						<button
							onClick={() => handleNavClick('integration')}
							className="text-md font-medium py-2 hover:text-primary transition-colors"
						>
							Integration
						</button>

						<div className="flex items-center gap-4 py-2">
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

						<div className="mt-6">
							<ButtonHoverEffect>
								<button
									onClick={() => (window.location.href = '/book-call')}
									className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors border-2 border-transparent bg-clip-padding"
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
					</nav>
				</div>
			</div>
		</header>
	);
};
