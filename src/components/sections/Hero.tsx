import { ButtonHoverEffect } from '@/components/ui/button-hover-effect';
import { MessageSquare } from 'lucide-react';
import Aurora from '@/blocks/Backgrounds/Aurora/Aurora';

interface HeroProps {
	scrollToSection: (id: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
	return (
		<section
			id="hero"
			className="relative pt-28 md:pt-32 pb-0.5 overflow-hidden px-4 sm:px-6"
		>
			<div className="absolute opacity-60 inset-0 w-full h-[50vh]">
				<Aurora
					colorStops={['#FFA57A', '#FC576E', '#7174C7']}
					amplitude={0.8}
					blend={50}
					speed={1}
				/>
			</div>

			<div className="flex flex-col gap items-center relative z-10">
				<div className="text-center max-w-3xl mx-auto animate-fade-in">
					<div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-4">
						AI VoiceBot that Talks, Books & Solves — Automatically
					</div>

					<h1 className="text-4xl md:text-5xl lg:text-6xl text-gradient font-display px-0.5 font-medium tracking-tight mb-4 sm:mb-6">
						Your Business, Elevated by Conversational AI
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2 sm:px-0">
						Turn conversations into conversions, bookings, or solutions —
						instantly. This AI voicebot works around the clock to handle tasks,
						talk to customers, and take action where it matters most.
					</p>

					<div className="flex flex-col gap-4 items-center">
						<ButtonHoverEffect>
							<button
								onClick={() => scrollToSection('demo')}
								className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black border-2 border-transparent bg-clip-padding relative font-medium flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[200px] group hover:text-white transition-colors"
								style={{
									backgroundImage:
										'linear-gradient(black, black), linear-gradient(to right, #FFA57A, #FC576E)',
									backgroundOrigin: 'border-box',
									backgroundClip: 'padding-box, border-box',
								}}
							>
								<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
								Try Live Demo
							</button>
						</ButtonHoverEffect>
						<p className="text-muted-foreground text-xs sm:text-sm">
							*Starting from $4000
						</p>
					</div>
				</div>

				<div className="relative -z-10 animate-fade-in w-full lg:-mt-20 mt-6 sm:mt-8">
					<div className="relative">
						<img
							src="/hero-chat-mockup.png"
							alt="EXACT AI Chat Interface"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
