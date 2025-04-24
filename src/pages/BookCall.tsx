import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { useState, useEffect, useRef } from 'react';

const BookCall = () => {
	const [isSticky, setIsSticky] = useState(false);
	const topRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);

		window.scrollTo(0, 0);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		// Load Calendly widget script
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div
			className="min-h-screen bg-black text-foreground overflow-x-hidden"
			ref={topRef}
		>
			<Header isSticky={isSticky} scrollToSection={scrollToSection} />

			<main className="container mx-auto px-4 sm:px-8 py-16 sm:py-24">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl sm:text-5xl font-bold mb-6 text-gradient">
						Book a Free Call
					</h1>
					<p className="text-lg mb-12 text-gray-300">
						Schedule a 30-minute consultation to discuss how our AI solutions can transform your business communication.
					</p>

						<div 
							className="calendly-inline-widget" 
							data-url="https://calendly.com/daniel-exct/30min"
							style={{ minWidth: '320px', height: '700px' }}
						/>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default BookCall; 