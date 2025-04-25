import { ButtonHoverEffect } from '@/components/ui/button-hover-effect';
import { Calendar } from 'lucide-react';
import Aurora from '@/blocks/Backgrounds/Aurora/Aurora';
import { ChatInterface } from '@/components/ChatInterface';

interface HeroProps {
	scrollToSection: (id: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
	return (
		<section className="relative pt-20 lg:pt-28 overflow-hidden">
			<div className="absolute opacity-60 inset-0 w-full h-[50vh]">
				<Aurora
					colorStops={['#FFA57A', '#FC576E', '#7174C7']}
					amplitude={0.8}
					blend={50}
					speed={1}
				/>
			</div>

			<div className="flex flex-col gap items-center relative z-10">
				<div className="text-center px-4 max-w-5xl mx-auto animate-fade-in">
					<h1 className="text-4xl lg:text-6xl text-gradient font-display font-medium tracking-tight mb-6 mt-3">
						Your Always-On AI Chat Assistant. Custom-Built for Your Business
					</h1>
					<p className="text-md md:text-lg lg:text-xl text-muted-foreground mb-8">
						Solve issues, answer questions, and convert leads in real time. This
						ChatBot learns your workflows, speaks your tone, and handles
						conversations — automatically.
					</p>

					<div className="flex flex-col gap-4 items-center">
						<ButtonHoverEffect>
							<button
								onClick={() => (window.location.href = '/book-call')}
								className="px-6 py-3 rounded-full bg-black border-2 border-transparent bg-clip-padding relative font-medium flex items-center justify-center gap-2 w-full group hover:text-white transition-colors"
								style={{
									backgroundImage:
										'linear-gradient(black, black), linear-gradient(to right, #FFA57A, #FC576E)',
									backgroundOrigin: 'border-box',
									backgroundClip: 'padding-box, border-box',
								}}
							>
								<Calendar className="w-5 h-5" />
								Book a Call
							</button>
						</ButtonHoverEffect>
						<p className="text-muted-foreground text-sm">
							*Starting from $4000
						</p>
					</div>
				</div>

				<div className="relative w-full animate-fade-in">
					<div className="relative w-full overflow-hidden">
						<div className="relative h-[1100px] lg:h-[1100px] w-[1800px] lg:w-[2200px] left-1/2 -mb-12 lg:-mb-0 -translate-x-1/2">
							<img
								src="/hero-chat-d.png"
								alt="NEXT APP Chat Interface"
								className="w-full h-full object-contain hidden lg:block absolute inset-0"
								style={{ objectPosition: '50% 45%' }}
							/>
							<img
								src="/hero-chat-m.png"
								alt="NEXT APP Chat Interface Mobile"
								className="w-full h-full object-contain block -mt-12 lg:hidden absolute inset-0"
							/>

							<div className="absolute top-[4.9%] lg:top-[5.1%] left-1/2 -translate-x-1/2 w-full max-w-[360px] lg:max-w-[414px] px-4">
								<ChatInterface mobileHeight={667} desktopHeight={778} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
