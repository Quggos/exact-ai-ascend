import { ButtonHoverEffect } from "@/components/ui/button-hover-effect";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

interface LiveDemoProps {
  scrollToSection: (id: string) => void;
}

export const LiveDemo = ({ scrollToSection }: LiveDemoProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="demo" className="section-padding bg-gradient-to-b from-black to-background relative">
      <div className="container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-white/60 text-3xl tracking-[-0.02em] font-medium mb-3">Investments & Publishing</p>
          <h2 className="text-7xl font-semibold text-gradient tracking-[-0.02em] mb-8">We enable <br/>entrepreneurship</h2>
          <p className="text-white/60 font-regular leading-12 tracking-[-0.02em] text-3xl">
          In addition to supporting our in-house studios, we are always looking to extend our resources to promising new projects in our ecosystem. Our focus is on mobile apps and games, but we are also evaluating opportunities in other exciting fields.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="glass-morphism rounded-3xl p-4 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-0 opacity-40"></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap md:flex-nowrap gap-6">
                <div className="w-full md:w-1/3">
                  <div className="sticky top-24">
                    <h3 className="text-xl font-bold mb-6">Try Different Scenarios</h3>
                    <div className="space-y-3">
                      <button 
                        onClick={() => setActiveTab(0)}
                        className={`w-full text-lg text-left px-4 py-3 rounded-xl transition-all ${activeTab === 0 ? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white' : 'bg-white/5 hover:bg-white/10'}`}
                      >
                        Customer Support
                      </button>
                      <button 
                        onClick={() => setActiveTab(1)}
                        className={`w-full text-lg text-left px-4 py-3 rounded-xl transition-all ${activeTab === 1 ? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white' : 'bg-white/5 hover:bg-white/10'}`}
                      >
                        Sales Inquiry
                      </button>
                      <button 
                        onClick={() => setActiveTab(2)}
                        className={`w-full text-lg text-left px-4 py-3 rounded-xl transition-all ${activeTab === 2 ? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white' : 'bg-white/5 hover:bg-white/10'}`}
                      >
                        Technical Question
                      </button>
                      <button 
                        onClick={() => setActiveTab(3)}
                        className={`w-full text-lg text-left px-4 py-3 rounded-xl transition-all ${activeTab === 3 ? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white' : 'bg-white/5 hover:bg-white/10'}`}
                      >
                        Subscription Management
                      </button>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-medium text-lg mb-2">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
                          <span className="text-sm text-muted-foreground">Instant, accurate responses</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
                          <span className="text-sm text-muted-foreground">Natural conversation flow</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
                          <span className="text-sm text-muted-foreground">Consistent brand voice</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#FFA4A4] mr-2" />
                          <span className="text-sm text-muted-foreground">Contextual understanding</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="glass-morphism rounded-2xl overflow-hidden">
                    <div className="bg-black/30 py-2 px-4 flex items-center justify-between">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-muted-foreground">EXACT AI Assistant</div>
                      <div className="w-4"></div>
                    </div>
                    
                    <div className="p-6">
                      {activeTab === 0 && (
                        <div className="space-y-6">
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-end">
                            <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
                              <p>I can't log into my account. I keep getting an error message.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>I'm sorry to hear you're having trouble logging in. Let's fix this right away. Could you tell me:</p>
                              <ol className="mt-2 space-y-1 list-decimal list-inside">
                                <li>What error message are you seeing exactly?</li>
                                <li>Are you using the email address you registered with?</li>
                                <li>Have you tried resetting your password?</li>
                              </ol>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-end">
                            <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
                              <p>It says "Invalid credentials" and yes, I'm using the right email. I haven't tried resetting my password yet.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Let's try resetting your password first, as that's the most common solution. Here's how:</p>
                              <ol className="mt-2 space-y-1 list-decimal list-inside">
                                <li>Go to the login page</li>
                                <li>Click "Forgot Password"</li>
                                <li>Enter your email address</li>
                                <li>Check your email for reset instructions</li>
                              </ol>
                              <p className="mt-2">I can also generate a password reset link directly if you confirm your email address. Would you like me to do that?</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 1 && (
                        <div className="space-y-6">
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-end">
                            <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
                              <p>I'm interested in your premium plan, but I need to know if it works with Shopify.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Yes, our Premium Plan integrates seamlessly with Shopify! You get:</p>
                              <ul className="mt-2 space-y-1 list-disc list-inside">
                                <li>Direct integration with your Shopify store</li>
                                <li>Real-time access to product inventory and details</li>
                                <li>Order status tracking for customers</li>
                                <li>Abandoned cart recovery automation</li>
                                <li>Customer purchase history access</li>
                              </ul>
                              <p className="mt-2">Many Shopify merchants see a 30-40% reduction in support tickets and a 25% increase in conversion rate after implementation. What size is your Shopify store?</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-end">
                            <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
                              <p>We have about 200 products and process around 500 orders per month.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Perfect! For your store size, our Business Plan at $6,000 would be ideal. It includes:</p>
                              <ul className="mt-2 space-y-1 list-disc list-inside">
                                <li>Up to 10,000 AI interactions monthly</li>
                                <li>All Shopify integrations mentioned earlier</li>
                                <li>Custom training on your product catalog</li>
                                <li>Analytics dashboard for performance tracking</li>
                              </ul>
                              <p className="mt-2">Would you like to see a personalized demo with your actual Shopify store data? I can arrange a 30-minute session with our integration specialist.</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 2 && (
                        <div className="space-y-6">
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-end">
                            <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
                              <p>How do I connect your chatbot to my website? Is there any code I need to add?</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Great question! Integrating our AI chat assistant with your website is simple. You have two options:</p>
                              
                              <p className="mt-2 font-medium">Option 1: No-Code Installation</p>
                              <ol className="mt-1 space-y-1 list-decimal list-inside text-muted-foreground">
                                <li>Log in to your EXACT AI dashboard</li>
                                <li>Go to "Integrations" → "Website"</li>
                                <li>Copy the provided script tag</li>
                                <li>Paste it right before the closing &lt;/body&gt; tag on your website</li>
                              </ol>
                              
                              <p className="mt-2 font-medium">Option 2: Developer API (for custom implementation)</p>
                              <p className="text-muted-foreground">If you need deeper customization, we provide a JavaScript SDK and REST API.</p>
                              
                              <p className="mt-2">Which option sounds better for your needs? I can provide more specific details on either approach.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-end">
                            <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
                              <p>The no-code option sounds easier. Will it work with WordPress?</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Yes, it works perfectly with WordPress! For WordPress sites, we actually have an even easier option:</p>
                              
                              <ol className="mt-2 space-y-1 list-decimal list-inside">
                                <li>Install our "EXACT AI Chat" plugin from the WordPress plugin directory</li>
                                <li>Activate the plugin</li>
                                <li>Enter your EXACT AI API key (found in your dashboard)</li>
                                <li>Configure appearance and behavior in the plugin settings</li>
                              </ol>
                              
                              <p className="mt-2">The WordPress plugin also includes additional features like WooCommerce integration for e-commerce sites. Would you like me to share documentation links for the WordPress installation?</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 3 && (
                        <div className="space-y-6">
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-end">
                            <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
                              <p>I need to change my billing information for my subscription.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>I'd be happy to help you update your billing information. To protect your account security, I'll need to verify a few details first. Could you please provide:</p>
                              <ol className="mt-2 space-y-1 list-decimal list-inside">
                                <li>The email address associated with your account</li>
                                <li>Your company name (if applicable)</li>
                              </ol>
                            </div>
                          </div>
                          
                          <div className="flex items-start justify-end">
                            <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-md">
                              <p>My email is john@techinnovate.com and the company is Tech Innovate LLC.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                            <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-md">
                              <p>Thank you for providing that information. I've located your account, Tech Innovate LLC, with the Business Plan subscription.</p>
                              
                              <p className="mt-2">You have two options to update your billing information:</p>
                              
                              <ol className="mt-2 space-y-1 list-decimal list-inside">
                                <li>I can send a secure link to john@techinnovate.com where you can update your payment details directly</li>
                                <li>You can update it yourself in the Billing section of your dashboard at app.exactai.com</li>
                              </ol>
                              
                              <p className="mt-2">Which option would you prefer?</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6">
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
                        onClick={() => scrollToSection("next-steps")} 
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