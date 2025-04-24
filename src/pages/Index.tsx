import { useRef, useState, useEffect } from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/sections/Footer';
import { UseCases } from '@/components/sections/UseCases';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { Support } from '@/components/sections/Support';
import { IntegrationProcess } from '@/components/sections/IntegrationProcess';
import { VoiceBotShowcase } from '@/components/sections/VoiceBotShowcase';
import ProvenResults from '@/components/sections/ProvenResults';

const Index = () => {
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
				<UseCases scrollToSection={scrollToSection} />
				<HowItWorks />
				<VoiceBotShowcase />
				<Features />
				<Support />
				<ProvenResults />
				<IntegrationProcess scrollToSection={scrollToSection} />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
