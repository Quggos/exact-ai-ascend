import { useRef, useState, useEffect } from 'react';
import { Header } from '@/components/chat-bot-sections/Header';
import { Hero } from '@/components/chat-bot-sections/Hero';
import { Footer } from '@/components/chat-bot-sections/Footer';
import { UseCases } from '@/components/chat-bot-sections/UseCases';
import { HowItWorks } from '@/components/chat-bot-sections/HowItWorks';
import { Features } from '@/components/chat-bot-sections/Features';
import { Support } from '@/components/chat-bot-sections/Support';
import { IntegrationProcess } from '@/components/chat-bot-sections/IntegrationProcess';
import ProvenResults from '@/components/chat-bot-sections/Results';
import { LiveDemo } from '@/components/chat-bot-sections/LiveDemo';

export const ChatBotPage = () => {
	const [isSticky, setIsSticky] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="min-h-screen bg-black text-foreground overflow-x-hidden">
			<Header isSticky={isSticky} scrollToSection={scrollToSection} />
			<main>
				<Hero scrollToSection={scrollToSection} />
				<div id="use-cases">
					<UseCases scrollToSection={scrollToSection} />
				</div>
				<div id="how-we-work">
					<HowItWorks />
				</div>
				<div id="live-demo">
					<LiveDemo scrollToSection={scrollToSection} />
				</div>
				<div id="features">
					<Features />
				</div>
				<div id="support">
					<Support />
				</div>
				<div id="results">
					<ProvenResults />
				</div>
				<div id="integration">
					<IntegrationProcess scrollToSection={scrollToSection} />
				</div>
			</main>
			<Footer />
		</div>
	);
};
