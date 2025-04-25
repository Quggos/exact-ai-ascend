import { ButtonHoverEffect } from '@/components/ui/button-hover-effect';
import { ArrowRight, CheckCircle, User, Bot } from 'lucide-react';
import { useState } from 'react';

interface LiveDemoProps {
	scrollToSection: (id: string) => void;
}

export const LiveDemo = ({ scrollToSection }: LiveDemoProps) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section
			id="demo"
			className="bg-gradient-to-b from-black to-background relative pb-16 md:pb-24 lg:pb-32"
		>
			<div className="lg:container md:container mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<p className="text-white/60 text-xl sm:text-2xl md:text-3xl tracking-[-0.02em] font-medium mb-2 sm:mb-3">
						Industry Solutions
					</p>
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gradient tracking-[-0.02em] mb-4 sm:mb-6 md:mb-8 break-words overflow-hidden px-4">
						Tailored for <br />
						your business
					</h2>
					<p className="text-white/60 font-regular leading-relaxed sm:leading-12 tracking-[-0.02em] text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 sm:px-0">
						Our AI assistant adapts to various industries, delivering
						specialized solutions that address unique challenges and
						requirements of your business sector.
					</p>
				</div>

				<div className="max-w-5xl px-4 mx-auto">
					<div className="glass-morphism rounded-3xl p-4 md:p-8 relative overflow-hidden min-h-[900px] h-auto">
						<div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-0 opacity-40"></div>

						<div className="relative z-10">
							<div className="flex flex-wrap md:flex-nowrap gap-6">
								<div className="w-full md:w-1/3">
									<div className="sticky top-24">
										<h3 className="text-xl font-bold mb-6">
											Industry Solutions
										</h3>
										<div className="space-y-3">
											<button
												onClick={() => setActiveTab(0)}
												className={`w-full text-lg text-left px-4 py-3 rounded-xl transition-all ${
													activeTab === 0
														? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white'
														: 'bg-white/5 hover:bg-white/10'
												}`}
											>
												E-commerce & Retail
											</button>
											<button
												onClick={() => setActiveTab(1)}
												className={`w-full text-lg text-left px-4 py-3 rounded-xl transition-all ${
													activeTab === 1
														? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white'
														: 'bg-white/5 hover:bg-white/10'
												}`}
											>
												Healthcare & Clinics
											</button>
											<button
												onClick={() => setActiveTab(2)}
												className={`w-full text-lg text-left px-4 py-3 rounded-xl transition-all ${
													activeTab === 2
														? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white'
														: 'bg-white/5 hover:bg-white/10'
												}`}
											>
												Banking & Fintech
											</button>
											<button
												onClick={() => setActiveTab(3)}
												className={`w-full text-lg text-left px-4 py-3 rounded-xl transition-all ${
													activeTab === 3
														? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white'
														: 'bg-white/5 hover:bg-white/10'
												}`}
											>
												Logistics & Delivery
											</button>
										</div>

										<div className="mt-8">
											<h4 className="font-medium text-lg mb-2">Key Benefits</h4>
											<ul className="space-y-2">
												{activeTab === 0 && (
													<>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Instantly answers product questions
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Collects emails for leads
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Shares restock updates
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Reduces abandoned carts
															</span>
														</li>
													</>
												)}

												{activeTab === 1 && (
													<>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Books appointments automatically
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Sends visit instructions
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Answers insurance and procedure FAQs
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Works nights and weekends
															</span>
														</li>
													</>
												)}

												{activeTab === 2 && (
													<>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Answers account FAQs
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Flags suspicious activity
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Shares financial product info
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Available 24/7 with no wait time
															</span>
														</li>
													</>
												)}

												{activeTab === 3 && (
													<>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Tracks orders in real-time
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Provides accurate ETAs
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Shares return instructions
															</span>
														</li>
														<li className="flex items-center">
															<CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
															<span className="text-sm text-muted-foreground">
																Reduces support ticket volume
															</span>
														</li>
													</>
												)}
											</ul>
										</div>
									</div>
								</div>

								<div className="w-full md:w-2/3">
									<div className="glass-morphism rounded-2xl overflow-hidden flex flex-col min-h-[600px]">
										<div className="bg-black/30 py-2 px-4 flex items-center justify-between">
											<div className="flex space-x-1">
												<div className="w-2 h-2 bg-red-500 rounded-full"></div>
												<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
											</div>
											<div className="text-xs text-muted-foreground">
												EXACT AI Assistant
											</div>
											<div className="w-4"></div>
										</div>

										<div className="p-6 pb-4 flex-1 flex flex-col justify-between">
											<div className="space-y-4">
												{activeTab === 0 && (
													<div className="space-y-5">
														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Hello! I'm your EXACT AI assistant for
																	e-commerce. How can I help you today?
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>Hi, do you ship to Germany?</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Yes, we do! Standard delivery to Germany takes
																	5–7 business days.
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>
																	Great. Do you have size L for the green
																	hoodie?
																</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Let me check... size L is currently out of
																	stock, but I can notify you when it's back.
																	Want to drop your email?
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>Sure, jens@email.com</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Perfect — you'll be the first to know when
																	it's restocked!
																</p>
															</div>
														</div>
													</div>
												)}

												{activeTab === 1 && (
													<div className="space-y-5">
														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Hello! I'm your EXACT AI healthcare assistant.
																	How can I help you today?
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>Can I book a dental check-up?</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Sure! We have Monday at 10AM or Wednesday at
																	2PM. Which works?
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>Monday.</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Great. What's your full name and email for
																	confirmation?
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>Sarah Kim, sarahk@gmail.com</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	You're all set for Monday at 10AM. A
																	confirmation has been sent!
																</p>
															</div>
														</div>
													</div>
												)}

												{activeTab === 2 && (
													<div className="space-y-5">
														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Hello! I'm your EXACT AI banking assistant.
																	How can I help you today?
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>
																	What's the monthly limit on my debit card?
																</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Your monthly spending limit is $4,000. Need
																	help adjusting it?
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>Yes, I'd like to raise it.</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Got it. For security, I'll connect you to a
																	specialist now. Please hold just a moment.
																</p>
															</div>
														</div>
													</div>
												)}

												{activeTab === 3 && (
													<div className="space-y-5">
														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Hello! I'm your EXACT AI logistics assistant.
																	How can I help you today?
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>My package hasn't arrived yet.</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>Let's check. What's your order number?</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>#7289</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	Thanks. It's at your local hub and out for
																	delivery — expected by 6PM today.
																</p>
															</div>
														</div>

														<div className="flex items-start justify-end">
															<div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
																<p>Got it. Thanks!</p>
															</div>
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">
																<User className="w-4 h-4" />
															</div>
														</div>

														<div className="flex items-start">
															<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">
																<Bot className="w-4 h-4" />
															</div>
															<div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
																<p>
																	You're welcome! Let me know if you need
																	anything else.
																</p>
															</div>
														</div>
													</div>
												)}
											</div>

											<div className="mt-4 mb-2">
												<div className="relative">
													<div className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 pr-12 text-sm text-white/30">
														Type your message...
													</div>
													<div className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] rounded-full p-2 text-white">
														<ArrowRight className="w-4 h-4" />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="mt-6 flex justify-center">
										<ButtonHoverEffect>
											<button
												onClick={() => scrollToSection('next-steps')}
												className="px-6 py-3 rounded-full bg-white text-black font-medium"
											>
												Get Your Custom Demo
											</button>
										</ButtonHoverEffect>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
