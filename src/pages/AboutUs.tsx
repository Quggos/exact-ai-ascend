import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

const AboutUs = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);

		window.scrollTo(0, 0);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="min-h-screen bg-black text-foreground overflow-x-hidden">
			<Header isSticky={isSticky} scrollToSection={scrollToSection} />

			<main className="container mx-auto px-4 sm:px-8 py-16 sm:py-24">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
						About Us
					</h1>

					<section className="mb-16">
						<h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
							Our Mission
						</h2>
						<p className="text-lg mb-6 text-gray-300">
							At NEXT, we're dedicated to transforming business communication
							through advanced AI text chat assistants. Our mission is to
							empower businesses with intelligent conversational AI that
							enhances customer experiences, streamlines operations, and drives
							growth.
						</p>
						<p className="text-lg mb-6 text-gray-300">
							We believe that accessible, powerful AI should be available to
							businesses of all sizes, and we're committed to making that vision
							a reality.
						</p>
					</section>

					<section className="mb-16 glass-morphism border border-white/5 p-8 rounded-xl">
						<h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
							Our Story
						</h2>
						<p className="text-lg mb-6 text-gray-300">
							Founded in 2023, NEXT emerged from a simple observation:
							businesses were struggling to effectively engage with their
							customers in the digital age. Our founders, with backgrounds in
							AI, customer experience, and business operations, set out to build
							a solution that would bridge this gap.
						</p>
						<p className="text-lg mb-6 text-gray-300">
							What began as a small team with a big vision has grown into a
							company at the forefront of conversational AI technology. Today,
							we help businesses across industries transform their customer
							interactions through intelligent, personalized AI assistants.
						</p>
					</section>

					<section className="mb-16">
						<h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
							Our Values
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="glass-morphism border border-white/5 p-6 rounded-xl">
								<h3 className="text-xl font-semibold mb-3 text-white">
									Innovation
								</h3>
								<p className="text-gray-300">
									We constantly push the boundaries of what's possible with AI,
									developing cutting-edge solutions that solve real business
									problems.
								</p>
							</div>
							<div className="glass-morphism border border-white/5 p-6 rounded-xl">
								<h3 className="text-xl font-semibold mb-3 text-white">
									Excellence
								</h3>
								<p className="text-gray-300">
									We're committed to delivering the highest quality products and
									services, with attention to detail and a focus on performance.
								</p>
							</div>
							<div className="glass-morphism border border-white/5 p-6 rounded-xl">
								<h3 className="text-xl font-semibold mb-3 text-white">
									Customer-Centricity
								</h3>
								<p className="text-gray-300">
									Our customers' success is our success. We build relationships
									based on trust, transparency, and mutual growth.
								</p>
							</div>
							<div className="glass-morphism border border-white/5 p-6 rounded-xl">
								<h3 className="text-xl font-semibold mb-3 text-white">
									Responsibility
								</h3>
								<p className="text-gray-300">
									We develop AI with ethics in mind, ensuring our technology is
									used responsibly and benefits society.
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default AboutUs;
