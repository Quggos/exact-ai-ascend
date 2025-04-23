import {
	BrainCircuit,
	Globe,
	Zap,
	MessageSquareDot,
	Database,
	BarChart3,
} from 'lucide-react';

export const Features = () => {
	const features = [
		{
			icon: BrainCircuit,
			title: 'Emotion Detection',
			description:
				'Understands tone, urgency, and frustration in real time — so it speaks calmly when tension rises, and knows when to hand off to a human.',
			gradient: 'from-[#FF6B6B] to-[#FF8E53]',
		},
		{
			icon: Globe,
			title: 'Multi-Lingual',
			description:
				'Supports over 100 languages and dialects with native-level fluency. From Mandarin to Portuguese, it adapts instantly to your customer’s language — no manual setup.',
			gradient: 'from-[#36D1DC] to-[#5B86E5]',
		},
		{
			icon: Zap,
			title: 'CRM & Calendar Integration',
			description:
				'Every lead, every booking, every customer update — automatically synced to your tools. Works seamlessly with Salesforce, HubSpot, Zoho, Outlook, Google Calendar, and more.',
			gradient: 'from-[#8E2DE2] to-[#4A00E0]',
		},
		{
			icon: MessageSquareDot,
			title: 'Weekly Executive Report',
			description:
				'Every Monday, your team receives a clear summary of performance: calls handled, issues flagged, leads captured. Fully customized for your managers — no dashboards to dig through.',
			gradient: 'from-[#11998E] to-[#38EF7D]',
		},
		{
			icon: Database,
			title: 'Custom Knowledge Integration',
			description:
				'Train the system with your specific business information, ensuring every response aligns perfectly with your products and policies.',
			gradient: 'from-[#F857A6] to-[#FF5858]',
		},
		{
			icon: BarChart3,
			title: 'Comprehensive Analytics',
			description:
				'Gain valuable insights from customer interactions to identify trends, improve offerings, and make data-driven business decisions.',
			gradient: 'from-[#FC5C7D] to-[#6A82FB]',
		},
	];

	return (
		<section
			id="features"
			className="section-padding bg-white relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24"
		>
			{/* Background gradient effect */}
			<div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6A82FB]/10 via-transparent to-transparent" />

			<div className="container mx-auto relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
					<p className="text-gray-600 text-xl sm:text-2xl md:text-3xl tracking-[-0.02em] font-medium mb-2 sm:mb-3">
						Features
					</p>
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
						Features That Drive Results - Not Just Calls
					</h2>
					<p className="text-gray-600 font-regular leading-relaxed sm:leading-12 tracking-[-0.02em] text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 sm:px-0">
						It’s not just voice automation. It’s smart, scalable infrastructure
						designed to solve real business problems — faster, cleaner, and more
						human.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="group relative bg-white border-transparent hover:border-gray-200 shadow-sm hover:shadow-md backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300"
						>
							<div
								className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl"
								style={{
									backgroundImage: `linear-gradient(to bottom right, ${feature.gradient})`,
								}}
							/>

							<div className="relative">
								<div
									className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 sm:mb-6 shadow-md`}
								>
									<feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
								</div>

								<h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-gray-900 mb-3 sm:mb-4">
									{feature.title}
								</h3>

								<p className="text-gray-600 text-base sm:text-lg leading-relaxed tracking-[-0.01em]">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
