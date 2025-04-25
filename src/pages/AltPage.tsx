import { useRef, useState, useEffect } from 'react';
import { Header } from '@/components/alt-sections/Header';
import { Hero } from '@/components/alt-sections/Hero';
import { Footer } from '@/components/alt-sections/Footer';
import { UseCases } from '@/components/alt-sections/UseCases';
import { HowItWorks } from '@/components/alt-sections/HowItWorks';
import { Features } from '@/components/alt-sections/Features';
import { Support } from '@/components/alt-sections/Support';
import { IntegrationProcess } from '@/components/alt-sections/IntegrationProcess';
import { Showcase } from '@/components/alt-sections/Showcase';
import ProvenResults from '@/components/alt-sections/Results';

const AltPage = () => {
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
				<div id="showcase">
					<Showcase />
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

export default AltPage;
