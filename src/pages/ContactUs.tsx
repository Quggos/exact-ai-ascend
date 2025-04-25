import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import ContactForm from '@/components/ContactForm';
import { useState, useEffect, useRef } from 'react';
import { SocialIcon } from 'react-social-icons';

const ContactUs = () => {
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
					<h1 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
						Contact Us
					</h1>
					<p className="text-lg mb-12 text-gray-300">
						Have a question or want to learn more about our services? Fill out
						the form below and our team will get back to you shortly.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="md:col-span-2">
							<ContactForm />
						</div>

						<div className="space-y-8">
							<div className="glass-morphism border border-white/5 p-6 rounded-xl">
								<h3 className="text-xl font-semibold mb-4 text-white">
									Contact Information
								</h3>
								<div className="space-y-4 text-gray-300">
									<div>
										<p className="font-medium">Email</p>
										<a
											href="mailto:contact@exct.com"
											className="hover:text-[#FC576E] transition-colors"
										>
											contact@exct.com
										</a>
									</div>
									<div>
										<p className="font-medium">Phone</p>
										<a
											href="tel:+13155570024"
											className="hover:text-[#FC576E] transition-colors"
										>
											+1 (315) 557-0024
										</a>
									</div>
									<div></div>
								</div>
							</div>

							<div className="glass-morphism border border-white/5 p-6 rounded-xl">
								<h3 className="text-xl font-semibold mb-4 text-white">
									Connect With Us
								</h3>
								<div className="flex space-x-4">
									<SocialIcon
										url="https://facebook.com/61574399337370/"
										target="_blank"
										style={{ height: 40, width: 40 }}
										fgColor="#ffffff"
										bgColor="transparent"
										className="hover:opacity-80 transition-colors"
									/>
									<SocialIcon
										url="https://linkedin.com/company/exct"
										target="_blank"
										style={{ height: 40, width: 40 }}
										fgColor="#ffffff"
										bgColor="transparent"
										className="hover:opacity-80 transition-colors"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default ContactUs;
