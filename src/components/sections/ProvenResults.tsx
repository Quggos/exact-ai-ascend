import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface IndustryCase {
	id: number;
	title: string;
	testimonial: string;
	metrics: {
		label: string;
		value: string;
	}[];
}

const industryCases: IndustryCase[] = [
	{
		id: 1,
		title: 'Photography Studios',
		testimonial:
			"Our post-session follow-up used to be inconsistent and time-consuming. With the AI VoiceBot, every client now receives personalized album suggestions and upsell options automatically. It's like having a post-shoot salesperson working 24/7.",
		metrics: [
			{ label: 'Upsell Conversions', value: '+45%' },
			{ label: 'Customer Retention', value: '+38%' },
			{ label: 'Time Freed / Day', value: '+2 hrs' },
		],
	},
	{
		id: 2,
		title: 'Home Renovation / Interior Design',
		testimonial:
			'This bot became our project manager. It follows up with timelines, prep checklists, and even recommends add-ons our team used to forget. Clients love the clarity — we love the extra revenue.',
		metrics: [
			{ label: 'Upsell Rate', value: '+51%' },
			{ label: 'Fewer Client Complaints', value: '–33%' },
			{ label: 'Time Saved Per Project', value: '4 hrs' },
		],
	},
	{
		id: 3,
		title: 'Home Cleaning / Maintenance',
		testimonial:
			"Our recurring bookings jumped the moment we deployed the bot. It reminds customers about their next appointment and even recommends extra services. It's subtle, but powerful.",
		metrics: [
			{ label: 'Repeat Bookings', value: '+57%' },
			{ label: 'Monthly Revenue Growth', value: '+32%' },
			{ label: 'Churn Rate Reduction', value: '–41%' },
		],
	},
	{
		id: 4,
		title: 'Travel Agencies / Tour Sellers',
		testimonial:
			"Our clients come from all over the world, and the VoiceBot speaks to them in their own language. It automatically sends relevant tips, insurance offers, and travel extras — all in the right tone. It's like having a multilingual travel assistant handling every lead.",
		metrics: [
			{ label: 'Package Value Growth', value: '+39%' },
			{ label: 'Lead-to-Booking Rate', value: '+26%' },
			{ label: 'Staff Time Freed', value: '+3.5 hrs/day' },
			{ label: 'Multilingual Support', value: '35+ languages' },
		],
	},
	{
		id: 5,
		title: 'Auto Repair Shops',
		testimonial:
			"Our customers are coming back more regularly. The AI reminds them when service is due and makes helpful recommendations. It's made us look 10× more professional.",
		metrics: [
			{ label: 'Repeat Visits', value: '+48%' },
			{ label: 'Revenue Per Client', value: '+21%' },
			{ label: 'Missed Appointments', value: '–37%' },
		],
	},
	{
		id: 6,
		title: 'Wedding Planners / Event Coordinators',
		testimonial:
			"We're swamped during peak season. The bot handles planning reminders and even vendor upsell prompts. Clients feel taken care of, and we close more premium packages.",
		metrics: [
			{ label: 'Time Saved Per Client', value: '6 hrs' },
			{ label: 'Upsell Conversion Rate', value: '+34%' },
			{ label: 'Client Satisfaction', value: '+29%' },
		],
	},
	{
		id: 7,
		title: 'Real Estate Agents',
		testimonial:
			"Leads go cold fast in this industry. The VoiceBot follows up with value — neighborhood tips, tour offers, and similar listings. We've reactivated so many cold leads this way.",
		metrics: [
			{ label: 'Lead Engagement Rate', value: '+61%' },
			{ label: 'Client Follow-Up Time', value: '–50%' },
			{ label: 'Closed Deals', value: '+33%' },
		],
	},
	{
		id: 8,
		title: 'Appointment-Based (Beauty, Clinics, Dentists)',
		testimonial:
			'Clients no longer forget appointments, and we upsell skincare and follow-ups without lifting a finger. The VoiceBot is like an automated assistant — but better.',
		metrics: [
			{ label: 'No-Show Reduction', value: '–47%' },
			{ label: 'Services Per Client', value: '+36%' },
			{ label: 'Retention Rate', value: '+42%' },
		],
	},
	{
		id: 9,
		title: 'B2B Service Agencies',
		testimonial:
			'Our onboarding used to kill momentum. Now clients feel supported from day one. The bot provides updates and nudges them toward high-value services automatically.',
		metrics: [
			{ label: 'Onboarding Completion Rate', value: '+58%' },
			{ label: 'Retainer Upsells', value: '+46%' },
			{ label: 'Project Cycle Time', value: '–3 days' },
		],
	},
	{
		id: 10,
		title: 'Online Bookstores & Niche Book Clubs',
		testimonial:
			'We were looking for a way to build relationships with our readers beyond the purchase. With this AI VoiceBot, we now deliver reading reminders, personalized summaries, and cross-sell recommendations without lifting a finger.',
		metrics: [
			{ label: 'Repeat Purchases', value: '+32%' },
			{ label: 'Customer Lifetime Value', value: '+41%' },
			{ label: 'Upsell Conversion Rate', value: '+27%' },
			{ label: 'Time Saved Weekly', value: '6 hrs' },
		],
	},
	{
		id: 11,
		title: 'Pet Groomers & Dog Trainers',
		testimonial:
			'This tool became our assistant overnight. It reminds pet owners about care tips after each appointment, offers suggestions for treats and training sessions, and builds trust without us needing to call.',
		metrics: [
			{ label: 'Return Appointments', value: '+38%' },
			{ label: 'Add-On Sales', value: '+29%' },
			{ label: 'Client Retention', value: '+34%' },
			{ label: 'Support Time Cut', value: '-45%' },
		],
	},
];

export default function ProvenResults() {
	return (
		<section className="w-full py-12 lg:py-24 relative bg-[#fafafa] overflow-hidden">
			<div className="container max-w-7xl relative z-10">
				<div className="flex flex-col items-center mb-8 md:mb-10 text-center">
					<h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
						<span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8">
							Across Industries</span>
					</h2>
					<p className="text-black/80 font-regular leading-relaxed tracking-[-0.02em] text-lg sm:text-xl md:text-3xl px-2 sm:px-0">
						Smart businesses are already integrating AI into their operations —
						not to catch up, but to lead. This is where the future of customer
						interaction begins.
					</p>
				</div>

				<div className="relative max-w-[1100px] mx-auto">
					<Carousel className="w-full">
						<CarouselContent>
							{industryCases.map((industry) => (
								<CarouselItem
									key={industry.id}
									className="md:basis-1/1 lg:basis-1/1"
								>
									<div className="p-2 md:p-6">
										<Card className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-16 md:mb-0">
											<CardContent className="p-4 md:p-8 ">
												<div className="flex flex-col md:flex-row items-start gap-3 md:gap-8 mb-5 md:mb-8">
													<div className="flex-shrink-0 w-16 h-16 md:w-28 md:h-28 mx-auto md:mx-0 mb-2 md:mb-0 bg-[#f7f7f7] rounded-xl">
														<div className="w-full h-full rounded-xl border border-[#f5d0d0] flex items-center justify-center">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="w-8 h-8 md:w-14 md:h-14 text-[#ff6b6b]"
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
														<h3 className="text-xl md:text-3xl font-medium mb-2 md:mb-4 text-gray-800 text-center md:text-left">
															{industry.title}
														</h3>
														<p className="text-sm md:text-lg text-gray-600 italic line-clamp-3 md:line-clamp-2">
															{industry.testimonial}
														</p>
													</div>
												</div>

												<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-8 mt-4 md:mt-8">
													{industry.metrics.slice(0, 3).map((metric, idx) => (
														<div
															key={idx}
															className="flex flex-col items-center"
														>
															<div
																className="w-full py-2 md:py-8 rounded-[32px] flex flex-col items-center justify-center"
																style={{
																	background:
																		'linear-gradient(to right, #FFA4A4, #EB2525)',
																}}
															>
																<p className="text-xl md:text-4xl lg:text-5xl font-bold text-white">
																	{metric.value}
																</p>
															</div>
															<p className="text-xs md:text-base font-medium text-gray-800 mt-1 md:mt-3">
																{metric.label}
															</p>
														</div>
													))}
												</div>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* Desktop navigation */}
						<div className="hidden md:block">
							<div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5">
								<CarouselPrevious className="h-16 w-16 rounded-lg bg-white border border-gray-200 hover:bg-gray-200 text-gray-700">
									<ChevronLeft className="h-5 w-5" />
								</CarouselPrevious>
							</div>

							<div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5">
								<CarouselNext className="h-16 w-16 rounded-lg bg-white border border-gray-200 hover:bg-gray-200 text-gray-700">
									<ChevronRight className="h-5 w-5" />
								</CarouselNext>
							</div>
						</div>

						{/* Mobile navigation */}
						<div className="md:hidden absolute left-0 right-0 bottom-4">
							<div className="flex justify-center gap-4">
								<CarouselPrevious className="h-12 w-12 rounded-lg bg-white border border-gray-200 hover:bg-gray-200 text-gray-700 static translate-x-0 translate-y-0">
									<ChevronLeft className="h-4 w-4" />
								</CarouselPrevious>

								<CarouselNext className="h-12 w-12 rounded-lg bg-white border border-gray-200 hover:bg-gray-200 text-gray-700 static translate-x-0 translate-y-0">
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
