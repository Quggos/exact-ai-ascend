import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

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
			"Our post-session follow-up used to be inconsistent and time-consuming. With the AI VoiceBot, every client now receives personalized album suggestions and upsell options automatically. It's like having a post-shoot salesperson working 24/7.",
		metrics: [
			{ label: 'Upsell Conversions', value: '+45%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Customer Retention', value: '+38%', icon: <Users className="w-5 h-5" /> },
			{ label: 'Time Freed / Day', value: '+2 hrs', icon: <Clock className="w-5 h-5" /> },
		],
	},
	{
		id: 2,
		title: 'Home Renovation / Interior Design',
		testimonial:
			'This bot became our project manager. It follows up with timelines, prep checklists, and even recommends add-ons our team used to forget. Clients love the clarity — we love the extra revenue.',
		metrics: [
			{ label: 'Upsell Rate', value: '+51%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Fewer Client Complaints', value: '–33%', icon: <Users className="w-5 h-5" /> },
			{ label: 'Time Saved Per Project', value: '4 hrs', icon: <Clock className="w-5 h-5" /> },
		],
	},
	{
		id: 3,
		title: 'Home Cleaning / Maintenance',
		testimonial:
			"Our recurring bookings jumped the moment we deployed the bot. It reminds customers about their next appointment and even recommends extra services. It's subtle, but powerful.",
		metrics: [
			{ label: 'Repeat Bookings', value: '+57%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Monthly Revenue Growth', value: '+32%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Churn Rate Reduction', value: '–41%', icon: <Users className="w-5 h-5" /> },
		],
	},
	{
		id: 4,
		title: 'Travel Agencies / Tour Sellers',
		testimonial:
			"Our clients come from all over the world, and the VoiceBot speaks to them in their own language. It automatically sends relevant tips, insurance offers, and travel extras — all in the right tone. It's like having a multilingual travel assistant handling every lead.",
		metrics: [
			{ label: 'Package Value Growth', value: '+39%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Lead-to-Booking Rate', value: '+26%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Staff Time Freed', value: '+3.5 hrs/day', icon: <Clock className="w-5 h-5" /> },
			{ label: 'Multilingual Support', value: '35+ languages', icon: <Users className="w-5 h-5" /> },
		],
	},
	{
		id: 5,
		title: 'Auto Repair Shops',
		testimonial:
			"Our customers are coming back more regularly. The AI reminds them when service is due and makes helpful recommendations. It's made us look 10× more professional.",
		metrics: [
			{ label: 'Repeat Visits', value: '+48%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Revenue Per Client', value: '+21%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Missed Appointments', value: '–37%', icon: <Clock className="w-5 h-5" /> },
		],
	},
	{
		id: 6,
		title: 'Wedding Planners / Event Coordinators',
		testimonial:
			"We're swamped during peak season. The bot handles planning reminders and even vendor upsell prompts. Clients feel taken care of, and we close more premium packages.",
		metrics: [
			{ label: 'Time Saved Per Client', value: '6 hrs', icon: <Clock className="w-5 h-5" /> },
			{ label: 'Upsell Conversion Rate', value: '+34%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Client Satisfaction', value: '+29%', icon: <Users className="w-5 h-5" /> },
		],
	},
	{
		id: 7,
		title: 'Real Estate Agents',
		testimonial:
			"Leads go cold fast in this industry. The VoiceBot follows up with value — neighborhood tips, tour offers, and similar listings. We've reactivated so many cold leads this way.",
		metrics: [
			{ label: 'Lead Engagement Rate', value: '+61%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Client Follow-Up Time', value: '–50%', icon: <Clock className="w-5 h-5" /> },
			{ label: 'Closed Deals', value: '+33%', icon: <TrendingUp className="w-5 h-5" /> },
		],
	},
	{
		id: 8,
		title: 'Appointment-Based (Beauty, Clinics, Dentists)',
		testimonial:
			'Clients no longer forget appointments, and we upsell skincare and follow-ups without lifting a finger. The VoiceBot is like an automated assistant — but better.',
		metrics: [
			{ label: 'No-Show Reduction', value: '–47%', icon: <Users className="w-5 h-5" /> },
			{ label: 'Services Per Client', value: '+36%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Retention Rate', value: '+42%', icon: <Users className="w-5 h-5" /> },
		],
	},
	{
		id: 9,
		title: 'B2B Service Agencies',
		testimonial:
			'Our onboarding used to kill momentum. Now clients feel supported from day one. The bot provides updates and nudges them toward high-value services automatically.',
		metrics: [
			{ label: 'Onboarding Completion Rate', value: '+58%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Retainer Upsells', value: '+46%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Project Cycle Time', value: '–3 days', icon: <Clock className="w-5 h-5" /> },
		],
	},
	{
		id: 10,
		title: 'Online Bookstores & Niche Book Clubs',
		testimonial:
			'We were looking for a way to build relationships with our readers beyond the purchase. With this AI VoiceBot, we now deliver reading reminders, personalized summaries, and cross-sell recommendations without lifting a finger.',
		metrics: [
			{ label: 'Repeat Purchases', value: '+32%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Customer Lifetime Value', value: '+41%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Upsell Conversion Rate', value: '+27%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Time Saved Weekly', value: '6 hrs', icon: <Clock className="w-5 h-5" /> },
		],
	},
	{
		id: 11,
		title: 'Pet Groomers & Dog Trainers',
		testimonial:
			'This tool became our assistant overnight. It reminds pet owners about care tips after each appointment, offers suggestions for treats and training sessions, and builds trust without us needing to call.',
		metrics: [
			{ label: 'Return Appointments', value: '+38%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Add-On Sales', value: '+29%', icon: <TrendingUp className="w-5 h-5" /> },
			{ label: 'Client Retention', value: '+34%', icon: <Users className="w-5 h-5" /> },
			{ label: 'Support Time Cut', value: '-45%', icon: <Clock className="w-5 h-5" /> },
		],
	},
];

const industryCases = originalIndustryCases.map(industry => ({
	...industry,
	metrics: industry.metrics.slice(0, 3)
}));

const MetricCard = ({ metric, className = '' }: { metric: IndustryCase['metrics'][0], className?: string }) => (
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

export default function ProvenResults() {
	return (
		<section className="w-full py-24 relative bg-[#fafafa] overflow-hidden">
			{/* Background Elements Removed */}

			<div className="container max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center mb-16 text-center">
					
					<h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tight mb-5">
						<span className="text-black bg-clip-text">
							Across Industries
						</span>
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
														<MetricCard 
															key={idx} 
															metric={metric} 
														/>
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
