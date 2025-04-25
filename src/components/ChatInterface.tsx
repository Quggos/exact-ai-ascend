import { Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ChatInterfaceProps {
	mobileHeight?: number;
	desktopHeight?: number;
}

export const ChatInterface = ({ mobileHeight, desktopHeight }: ChatInterfaceProps) => {
	const [visibleMessages, setVisibleMessages] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setVisibleMessages(prev => {
				if (prev < 5) return prev + 1;
				clearInterval(timer);
				return prev;
			});
		}, 400);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<style>
				{`
					@keyframes fadeScale {
						0% {
							opacity: 0;
							transform: scale(0.95);
						}
						100% {
							opacity: 1;
							transform: scale(1);
						}
					}
					.message-animate {
						animation: fadeScale 0.4s ease-out forwards;
					}
				`}
			</style>
			<div className="glass-morphism rounded-[48px] lg:rounded-[54px] p-4 lg:p-6 shadow-xl relative w-full max-w-2xl mx-auto lg:h-[var(--desktop-height)] h-[var(--mobile-height)]" style={
				{
					'--mobile-height': mobileHeight ? `${mobileHeight}px` : 'auto',
					'--desktop-height': desktopHeight ? `${desktopHeight}px` : 'auto'
				} as React.CSSProperties
			}>
				<div className="flex items-center mb-4 lg:mb-6">
					<div className="flex-1 text-center text-[11px] lg:text-xs text-muted-foreground">NEXT APP Chat</div>
				</div>

				<div className="space-y-3 lg:space-y-4 overflow-y-auto lg:h-[calc(var(--desktop-height)-120px)] h-[calc(var(--mobile-height)-96px)]">
					{visibleMessages > 0 && (
						<div className="flex items-start opacity-0 message-animate">
							<div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#FFA57A] to-[#FC576E] flex items-center justify-center text-white font-bold text-[10px] lg:text-xs mr-2 lg:mr-4 flex-shrink-0">AI</div>
							<div className="glass-morphism rounded-xl lg:rounded-2xl rounded-tl-none p-3 lg:p-4 text-[14px] lg:text-sm max-w-[85%]">
								<p>Hi! How can I help you with your business today?</p>
							</div>
						</div>
					)}

					{visibleMessages > 1 && (
						<div className="flex items-start justify-end opacity-0 message-animate">
							<div className="glass-morphism rounded-xl lg:rounded-2xl rounded-tr-none p-3 lg:p-4 text-[14px] lg:text-sm max-w-[85%]">
								<p>Looking for pricing info for our e-commerce store</p>
							</div>
							<div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-[10px] lg:text-xs ml-2 lg:ml-4 flex-shrink-0">U</div>
						</div>
					)}

					{visibleMessages > 2 && (
						<div className="flex items-start opacity-0 message-animate">
							<div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#FFA57A] to-[#FC576E] flex items-center justify-center text-white font-bold text-[10px] lg:text-xs mr-2 lg:mr-4 flex-shrink-0">AI</div>
							<div className="glass-morphism rounded-xl lg:rounded-2xl rounded-tl-none p-3 lg:p-4 text-[14px] lg:text-sm max-w-[85%]">
								<p>What's your monthly conversation volume? This helps me recommend the right plan.</p>
							</div>
						</div>
					)}

					{visibleMessages > 3 && (
						<div className="flex items-start justify-end opacity-0 message-animate">
							<div className="glass-morphism rounded-xl lg:rounded-2xl rounded-tr-none p-3 lg:p-4 text-[14px] lg:text-sm max-w-[85%]">
								<p>Around 5,000 conversations, mostly customer support and order tracking</p>
							</div>
							<div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-[10px] lg:text-xs ml-2 lg:ml-4 flex-shrink-0">U</div>
						</div>
					)}

					{visibleMessages > 4 && (
						<div className="flex items-start opacity-0 message-animate">
							<div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#FFA57A] to-[#FC576E] flex items-center justify-center text-white font-bold text-[10px] lg:text-xs mr-2 lg:mr-4 flex-shrink-0">AI</div>
							<div className="glass-morphism rounded-xl lg:rounded-2xl rounded-tl-none p-3 lg:p-4 text-[14px] lg:text-sm max-w-[85%]">
								<p>Perfect! Our Business plan at $6,000 would be ideal. It includes:</p>
								<ul className="mt-1.5 lg:mt-2 space-y-0.5 lg:space-y-1 list-disc list-inside">
									<li>10,000 monthly conversations</li>
									<li>E-commerce integration</li>
									<li>Custom knowledge base</li>
								</ul>
								<p className="mt-1.5 lg:mt-2">Would you like to see a demo of how it works with your store?</p>
							</div>
						</div>
					)}
				</div>

				<div className="mt-3 lg:mt-4 flex">
					{/* <input
						type="text"
						placeholder="Type your message..."
						className="flex-1 bg-white/5 border border-white/10 rounded-l-full px-4 py-2 text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-primary"
					/>
					<button className="bg-gradient-to-r from-[#FFA57A] to-[#FC576E] rounded-r-full px-4 py-2 text-white">
						<Calendar className="w-4 h-4" />
					</button> */}
				</div>
			</div>
		</>
	);
}; 