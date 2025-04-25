import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {
	ChevronLeft,
	ChevronRight,
	TrendingUp,
	Users,
	Clock,
} from 'lucide-react';

interface IndustryCase {
	id: number;
	title: string;
	testimonial: string;
	metrics: {
		label: string;
		value: string;
		icon?: React.ReactNode;
	}[];
}

const originalIndustryCases: IndustryCase[] = [
	{
		id: 1,
		title: 'Photography Studios',
		testimonial:
			"Before the chatbot, we struggled with missed client messages and late replies. Now every inquiry gets an instant answer, and we've automated things like session prep, FAQs, and even reprint requests. It's become our silent front desk.",
		metrics: [
			{
				label: 'Lead-to-booking conversion',
				value: '+45%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'Customer Retention',
				value: '+38%',
				icon: <Users className="w-5 h-5" />,
			},
			{
				label: 'hrs Staff time freed per day',
				value: '+2 hrs',
				icon: <Clock className="w-5 h-5" />,
			},
		],
	},
	{
		id: 2,
		title: 'Home Renovation / Interior Design',
		testimonial:
			"Clients used to wait hours for project timelines or basic updates. The chatbot handles those instantly — plus it suggests add-ons like smart lighting or extra rooms, which we didn't even push before. It's increased our upsell revenue noticeably.",
		metrics: [
			{
				label: 'Add-on sales',
				value: '+52%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'Faster first response time',
				value: '+35%',
				icon: <Clock className="w-5 h-5" />,
			},
			{
				label: 'hrs saved per project manager',
				value: '+3.2 hrs',
				icon: <Clock className="w-5 h-5" />,
			},
		],
	},
	{
		id: 3,
		title: 'Home Cleaning / Maintenance',
		testimonial:
			'We used to lose repeat customers because no one followed up. Now the chatbot does it for us — reminders, upsells, even feedback requests. Our team focuses more on service, while the bot keeps customers coming back.',
		metrics: [
			{
				label: 'Repeat bookings',
				value: '+40%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'New reviews collected',
				value: '+25%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'hrs saved per agent',
				value: '+1.5 hrs',
				icon: <Clock className="w-5 h-5" />,
			},
		],
	},
	{
		id: 4,
		title: 'Travel Agencies / Tour Packages',
		testimonial:
			'The chatbot transformed how we handle inquiries. It shares trip info, upsells insurance, and handles multiple languages — all without human help. It feels like we hired a new multilingual team member.',
		metrics: [
			{
				label: 'Package upgrades',
				value: '+34%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'Faster average response',
				value: '+61%',
				icon: <Clock className="w-5 h-5" />,
			},
			{
				label: 'Languages supported',
				value: '100+',
				icon: <Users className="w-5 h-5" />,
			},
		],
	},
	{
		id: 5,
		title: 'Auto Repair Shops',
		testimonial:
			'Our clients love that they can ask the bot about oil change schedules, get reminders, and even book slots instantly. What surprised us? Fewer no-shows, because the bot follows up automatically.',
		metrics: [
			{
				label: 'Missed appointments',
				value: '-28%',
				icon: <Clock className="w-5 h-5" />,
			},
			{
				label: 'Booking completion rate',
				value: '+46%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'hrs daily saved for staff',
				value: '+1.8 hrs',
				icon: <Clock className="w-5 h-5" />,
			},
		],
	},
	{
		id: 6,
		title: 'Wedding Planners & Event Services',
		testimonial:
			"The chatbot handles a ton of client back-and-forth: vendor lists, schedules, reminders. Our clients feel looked after, and we stay organized. It's like having a polite assistant working all night.",
		metrics: [
			{
				label: 'Planning efficiency',
				value: '+36%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'Client satisfaction score',
				value: '+31%',
				icon: <Users className="w-5 h-5" />,
			},
			{
				label: 'admin time saved',
				value: '+2.2 hrs',
				icon: <Clock className="w-5 h-5" />,
			},
		],
	},
	{
		id: 7,
		title: 'Real Estate Agents',
		testimonial:
			'It chats with prospects, answers property questions, and collects lead details 24/7 — without us lifting a finger. Follow-ups are automated, and the CRM gets all the info instantly.',
		metrics: [
			{
				label: 'Lead capture rate',
				value: '+48%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'Response speed',
				value: '+42%',
				icon: <Clock className="w-5 h-5" />,
			},
			{
				label: 'hrs saved per agent',
				value: '+3.5 hrs',
				icon: <Clock className="w-5 h-5" />,
			},
		],
	},
	{
		id: 8,
		title: 'Beauty Clinics / Dentists / Salons',
		testimonial:
			"Clients love the chatbot. It reminds them of appointments, suggests upgrades, and handles post-visit questions. We've had fewer no-shows and better upsells — all while spending less time on the phone.",
		metrics: [
			{
				label: 'No-shows',
				value: '-35%',
				icon: <Clock className="w-5 h-5" />,
			},
			{
				label: 'Service upsells',
				value: '+29%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'staff time saved daily',
				value: '+1.9 hrs',
				icon: <Clock className="w-5 h-5" />,
			},
		],
	},
	{
		id: 9,
		title: 'Marketing / B2B Agencies',
		testimonial:
			"We integrated the bot for onboarding, check-ins, and reporting. It delivers a premium experience without needing extra staff. Clients think it's human — and we look bigger and smarter.",
		metrics: [
			{
				label: 'Onboarding speed',
				value: '+37%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'Retainer upsell rate',
				value: '+22%',
				icon: <TrendingUp className="w-5 h-5" />,
			},
			{
				label: 'saved per PM weekly',
				value: '+3 hrs',
				icon: <Clock className="w-5 h-5" />,
			},
		],
	},
];

const industryCases = originalIndustryCases.map((industry) => ({
	...industry,
	metrics: industry.metrics.slice(0, 3),
}));

const MetricCard = ({
	metric,
	className = '',
}: {
	metric: IndustryCase['metrics'][0];
	className?: string;
}) => (
	<div className={`relative group ${className}`}>
		<div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200/50 hover:border-[#EB2525]/30 transition-all duration-300 h-full flex flex-col">
			<div className="flex items-center gap-3 mb-2">
				<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white flex-shrink-0">
					{metric.icon}
				</div>
				<p className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-transparent bg-clip-text whitespace-nowrap">
					{metric.value}
				</p>
			</div>
			<p className="text-sm md:text-base text-gray-600 mt-auto">
				{metric.label}
			</p>
		</div>
	</div>
);

export default function Results() {
	return (
		<section className="w-full py-24 relative bg-[#fafafa] overflow-hidden">
			{/* Background Elements Removed */}

			<div className="container max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center mb-16 text-center">
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
						Proven Results Across Industries
					</h2>

					<p className="text-black/80 font-regular leading-relaxed tracking-[-0.02em] text-lg sm:text-xl md:text-3xl max-w-4xl mx-auto">
						Smart businesses are already integrating AI into their operations —
						not to catch up, but to lead. This is where the future of customer
						interaction begins.
					</p>
				</div>

				<div className="relative max-w-[1100px] mx-auto px-1 sm:px-0 lg:px-16">
					<Carousel className="w-full">
						<CarouselContent>
							{industryCases.map((industry) => (
								<CarouselItem
									key={industry.id}
									className="md:basis-1/1 lg:basis-1/1"
								>
									<div className="md:p-6">
										<Card className="rounded-2xl overflow-hidden border border-gray-200 bg-white/80 transition-all duration-300">
											<CardContent className="p-6 md:p-8">
												<div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-8">
													<div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 mx-auto md:mx-0  rounded-2xl p-4">
														<div className="w-full h-full rounded-xl border border-[#f5d0d0] flex items-center justify-center">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="w-8 h-8 md:w-12 md:h-12 text-[#ff6b6b]"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<rect
																	x="3"
																	y="3"
																	width="18"
																	height="18"
																	rx="2"
																/>
																<path d="M3 9h18" />
																<path d="M9 21V9" />
															</svg>
														</div>
													</div>
													<div className="flex-grow">
														<h3 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800 text-center md:text-left">
															{industry.title}
														</h3>
														<p className="text-base md:text-lg text-gray-600 italic leading-relaxed">
															{industry.testimonial}
														</p>
													</div>
												</div>

												<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
													{industry.metrics.map((metric, idx) => (
														<MetricCard key={idx} metric={metric} />
													))}
												</div>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* Desktop navigation - only visible on large screens */}
						<div className="hidden lg:block">
							<div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
								<CarouselPrevious className="h-16 w-16 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-black text-gray-700 transition-all duration-300">
									<ChevronLeft className="h-5 w-5" />
								</CarouselPrevious>
							</div>

							<div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
								<CarouselNext className="h-16 w-16 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-black text-gray-700 transition-all duration-300">
									<ChevronRight className="h-5 w-5" />
								</CarouselNext>
							</div>
						</div>

						{/* Mobile and tablet navigation - below cards */}
						<div className="lg:hidden mt-8">
							<div className="flex justify-center gap-4">
								<CarouselPrevious className="h-12 w-12 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-black text-gray-700 transition-all duration-300 static translate-x-0 translate-y-0">
									<ChevronLeft className="h-4 w-4" />
								</CarouselPrevious>

								<CarouselNext className="h-12 w-12 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-black text-gray-700 transition-all duration-300 static translate-x-0 translate-y-0">
									<ChevronRight className="h-4 w-4" />
								</CarouselNext>
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
