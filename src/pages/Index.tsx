
import { useRef, useState, useEffect } from "react";
import { ExactLogo } from "@/components/ExactLogo";
import { ButtonHoverEffect } from "@/components/ui/button-hover-effect";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { FeatureCard } from "@/components/ui/feature-card";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { Button } from "@/components/ui/button";

import {
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Database,
  Headphones,
  HeartPulse,
  Languages,
  LineChart,
  MessageSquare,
  Phone,
  Play,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  User,
  Users,
  Zap,
  BrainCircuit,
  BadgeCheck,
  Loader,
  Gauge
} from "lucide-react";

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const caseStudies = [
    {
      title: "B2B Sales Agency",
      results: {
        salesGrowth: "+37% in 3 months",
        moreClients: "+22 new clients",
        reducedCosts: "-18% operational costs",
        moreFreeTime: "+15 hours/week"
      }
    },
    {
      title: "E-commerce Support",
      results: {
        salesGrowth: "+42% conversion rate",
        moreClients: "+15% customer retention",
        reducedCosts: "-25% support costs",
        moreFreeTime: "24/7 availability"
      }
    },
    {
      title: "Financial Services",
      results: {
        salesGrowth: "+28% lead qualification",
        moreClients: "+30% faster onboarding",
        reducedCosts: "-22% staffing needs",
        moreFreeTime: "90% automated inquiries"
      }
    }
  ];
  
  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlayAudio = () => {
    // In a real implementation, this would play an audio sample
    alert("This would play an AI voice sample in a real implementation.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className={`sticky top-0 z-50 ${isSticky ? 'glass-morphism backdrop-blur-xl' : 'bg-transparent'} transition-all duration-300 border-b border-white/5`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <ExactLogo />
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("use-cases")} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("support")} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Support
            </button>
            <button 
              onClick={() => scrollToSection("results")} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Results
            </button>
          </nav>
          
          <ButtonHoverEffect>
            <button onClick={() => scrollToSection("next-steps")} className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors">
              Book a Call
            </button>
          </ButtonHoverEffect>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative section-padding pt-28 pb-36 overflow-hidden glow">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-40"></div>
          </div>
          
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center relative z-10">
            <div className="lg:col-span-3 animate-fade-in">
              <div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-4">
                AI Voice Assistants for Business
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Your Business, <span className="text-gradient">Transformed</span> by Conversational AI
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                EXACT AI creates human-like voice assistants that elevate customer interactions, automate support, and boost sales without losing the personal touch.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonHoverEffect>
                  <button 
                    onClick={handlePlayAudio}
                    className="px-6 py-3 rounded-full primary-gradient text-white font-medium flex items-center justify-center gap-2"
                  >
                    <Headphones className="w-5 h-5" />
                    Listen to Sample
                  </button>
                </ButtonHoverEffect>
                <p className="text-muted-foreground text-sm mt-2 sm:mt-4 sm:ml-2">*Starting from $4000</p>
              </div>
            </div>
            
            <div className="relative lg:col-span-2 z-10 animate-fade-in flex justify-center lg:justify-end">
              <PhoneMockup 
                className="animate-float" 
                showPlayButton={true}
                onPlay={handlePlayAudio}
              />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
        
        {/* Conversational Demo Section */}
        <section className="section-padding bg-black relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="glass-morphism rounded-3xl p-8 overflow-hidden">
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <div className="flex-1 text-center text-xs text-muted-foreground">AI Assistant Conversation</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                      <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                        <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end">
                      <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                        <p>I'd like to know about your premium plan options</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                      <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                        <p>Of course! We offer three premium plans tailored to business needs:</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          <li>Standard: $4,000 - Basic chat assistant with 24/7 support</li>
                          <li>Business: $6,000 - Multi-channel integration with analytics</li>
                          <li>Enterprise: Custom pricing - Full AI suite with white-labeling</li>
                        </ul>
                        <p className="mt-2">Would you like me to tell you more about any specific plan?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end">
                      <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                        <p>That sounds great. Could you book a demo for me?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                      <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                        <p>I'd be happy to help you book a demo! Let me connect you with our scheduling assistant to find a time that works for you.</p>
                        <div className="mt-3 p-3 bg-white/5 rounded-lg">
                          <p className="text-xs text-primary">⚡ Assistant is scheduling a demo call</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
                  Conversations that Convert
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our AI assistants engage customers in natural, productive conversations that feel human while delivering automated efficiency. They understand context, respond to emotions, and guide users to solutions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Natural Language Understanding</h3>
                      <p className="text-sm text-muted-foreground">Understands complex queries, slang, and even detects customer sentiment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Contextual Memory</h3>
                      <p className="text-sm text-muted-foreground">Remembers conversation history for personalized interactions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Human-like Voice</h3>
                      <p className="text-sm text-muted-foreground">Lifelike intonation and speech patterns that customers trust</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <ButtonHoverEffect>
                    <button onClick={handlePlayAudio} className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2">
                      <Play className="w-5 h-5" />
                      Hear the Difference
                    </button>
                  </ButtonHoverEffect>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section id="use-cases" className="section-padding bg-gradient-to-b from-black to-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Transformative Use Cases"
              subtitle="Our AI voice assistant adapts to your business needs across multiple scenarios."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-morphism rounded-xl p-8 hover-glow">
                <div className="w-14 h-14 rounded-full primary-gradient flex items-center justify-center mb-6">
                  <HeartPulse className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Customer Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">24/7 instant response to customer inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Intelligent ticket prioritization and routing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Reduced resolution times by up to 70%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Superior customer satisfaction scores</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-morphism rounded-xl p-8 hover-glow">
                <div className="w-14 h-14 rounded-full primary-gradient flex items-center justify-center mb-6">
                  <LineChart className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Sales Acceleration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Intelligent lead qualification and scoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Automated follow-ups and appointment setting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Personalized product recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Increase conversion rates by up to 35%</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-morphism rounded-xl p-8 hover-glow">
                <div className="w-14 h-14 rounded-full primary-gradient flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Customized Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tailor-made conversational flows for your industry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Integration with existing systems and CRMs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Continuous optimization based on conversation data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Industry-specific knowledge and compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics & Integration Section */}
        <section className="section-padding bg-white text-black relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
          <div className="container mx-auto relative z-10">
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Seamless Integration, Measurable Results
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI assistant integrates with your existing systems and delivers ROI from day one.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="shadow-xl bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
                        <Gauge className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">Response Time</h3>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">0.8s</div>
                    <p className="text-sm text-gray-500">Average response time</p>
                  </div>
                  
                  <div className="shadow-xl bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">Availability</h3>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">24/7</div>
                    <p className="text-sm text-gray-500">Always available</p>
                  </div>
                  
                  <div className="shadow-xl bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">Conversion</h3>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">+41%</div>
                    <p className="text-sm text-gray-500">Lead conversion increase</p>
                  </div>
                  
                  <div className="shadow-xl bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">Satisfaction</h3>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">95%</div>
                    <p className="text-sm text-gray-500">Customer satisfaction</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                    <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center space-x-2">
                      <img src="https://www.hubx.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalesforce.b39bc7df.png&w=96&q=75" alt="Salesforce" className="h-6 w-auto" />
                      <span className="text-sm font-medium text-gray-600">Salesforce</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center space-x-2">
                      <img src="https://www.hubx.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzendesk.fa08e9a0.png&w=96&q=75" alt="Zendesk" className="h-6 w-auto" />
                      <span className="text-sm font-medium text-gray-600">Zendesk</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center space-x-2">
                      <img src="https://www.hubx.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhubspot.2b93e98c.png&w=96&q=75" alt="HubSpot" className="h-6 w-auto" />
                      <span className="text-sm font-medium text-gray-600">HubSpot</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">+30 more</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform -rotate-6"></div>
                  <PhoneMockup 
                    showPlayButton={true}
                    onPlay={handlePlayAudio}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="section-padding bg-background relative glow">
          <div className="container mx-auto">
            <SectionHeading 
              title="Advanced AI Assistant Features"
              subtitle="Our intelligent voice assistant combines cutting-edge technology with practical business applications."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-3">
                <div className="glass-morphism rounded-2xl p-6 md:p-10 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl primary-gradient mb-4">
                        <BrainCircuit className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gradient">Emotional Intelligence</h3>
                      <p className="text-muted-foreground mb-6">
                        Our AI assistant doesn't just process words—it understands emotions. It detects frustration, excitement, or confusion in a customer's voice and adapts its tone and responses accordingly.
                      </p>
                      <Button onClick={() => scrollToSection("next-steps")} variant="outline" className="rounded-full">
                        Learn More
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="glass-morphism rounded-2xl p-6 relative z-10">
                        <div className="mb-4 flex justify-between items-center">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-xs text-muted-foreground">Emotion Detection</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-2/5 text-xs">Sentiment Analysis</div>
                            <div className="w-3/5 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{width: "88%"}}></div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2/5 text-xs">Tone Adaptation</div>
                            <div className="w-3/5 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{width: "92%"}}></div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2/5 text-xs">Response Accuracy</div>
                            <div className="w-3/5 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{width: "95%"}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 w-full h-full bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-2xl blur -z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <FeatureCard
                icon={Languages}
                title="Multilingual Support"
                description="Communicate with customers in over 30 languages with natural fluency and cultural awareness, expanding your global reach instantly."
                ctaText="Learn More"
                ctaAction={() => scrollToSection("next-steps")}
              />
              
              <FeatureCard
                icon={MessageSquare}
                title="Multi-Channel Integration"
                description="Deploy across websites, messaging apps, voice systems, and social media platforms for consistent customer experiences everywhere."
                ctaText="Learn More"
                ctaAction={() => scrollToSection("next-steps")}
              />
              
              <FeatureCard
                icon={Database}
                title="Intelligent Analytics"
                description="Receive detailed insights on customer interactions, highlighting trends, common issues, and optimization opportunities automatically."
                ctaText="Learn More"
                ctaAction={() => scrollToSection("next-steps")}
              />
            </div>
          </div>
        </section>
        
        {/* Voice Showcase Section */}
        <section className="section-padding bg-gradient-to-b from-background to-black/95">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-4">
                  Voice Technology
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
                  Voices Indistinguishable from Human
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our advanced voice synthesis creates natural, expressive speech that customers can't tell apart from human agents. Choose from a range of voices or create a custom voice that matches your brand identity.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="glass-morphism rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors" onClick={handlePlayAudio}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">Emily</h4>
                      <Play className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-full h-10 rounded-lg bg-black/30 overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>
                        <div className="absolute inset-y-0 left-[20%] w-[1px] h-full bg-white/50"></div>
                        <div className="absolute inset-y-0 left-[40%] w-[1px] h-full bg-white/50"></div>
                        <div className="absolute inset-y-0 left-[60%] w-[1px] h-full bg-white/50"></div>
                        <div className="absolute inset-y-0 left-[80%] w-[1px] h-full bg-white/50"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-morphism rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors" onClick={handlePlayAudio}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">Michael</h4>
                      <Play className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-full h-10 rounded-lg bg-black/30 overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-green-500/20 to-blue-500/20 relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>
                        <div className="absolute inset-y-0 left-[20%] w-[1px] h-full bg-white/50"></div>
                        <div className="absolute inset-y-0 left-[40%] w-[1px] h-full bg-white/50"></div>
                        <div className="absolute inset-y-0 left-[60%] w-[1px] h-full bg-white/50"></div>
                        <div className="absolute inset-y-0 left-[80%] w-[1px] h-full bg-white/50"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ButtonHoverEffect>
                    <button 
                      onClick={handlePlayAudio}
                      className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2"
                    >
                      <Headphones className="w-5 h-5" />
                      Listen to Samples
                    </button>
                  </ButtonHoverEffect>
                  <ButtonHoverEffect>
                    <button 
                      onClick={() => scrollToSection("next-steps")}
                      className="px-6 py-3 rounded-full bg-black border border-white/10 text-white font-medium"
                    >
                      Custom Voice Options
                    </button>
                  </ButtonHoverEffect>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl -z-10 opacity-60"></div>
                <div className="glass-morphism rounded-3xl p-6 relative">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl bg-black">
                    <div className="w-full h-full flex items-center justify-center">
                      <button 
                        onClick={handlePlayAudio}
                        className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group hover:bg-white/20 transition-colors"
                      >
                        <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-sm font-medium">Voice Technology Demo</div>
                      <div className="text-xs text-muted-foreground">Experience the natural flow and tone of our AI voices</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="text-sm font-medium mb-2">Voice Quality Comparison</div>
                      <div className="flex items-center">
                        <div className="w-24 text-xs text-muted-foreground">EXACT AI</div>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full" style={{width: "96%"}}></div>
                        </div>
                        <div className="w-10 text-xs text-right text-muted-foreground">96%</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <div className="w-24 text-xs text-muted-foreground">Competitor A</div>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-white/40 rounded-full" style={{width: "72%"}}></div>
                        </div>
                        <div className="w-10 text-xs text-right text-muted-foreground">72%</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <div className="w-24 text-xs text-muted-foreground">Competitor B</div>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-white/40 rounded-full" style={{width: "65%"}}></div>
                        </div>
                        <div className="w-10 text-xs text-right text-muted-foreground">65%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Support Section */}
        <section id="support" className="section-padding bg-black relative glow">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <SectionHeading 
              title="Premium Support & Maintenance"
              subtitle="We're committed to your long-term success with comprehensive technical and strategic support."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="glass-morphism rounded-3xl p-8 hover-glow transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl primary-gradient flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">24/7 Monitoring</h3>
                <p className="text-muted-foreground mb-6">
                  Our expert team proactively monitors your AI system around the clock, ensuring optimal performance and immediate response to any issues.
                </p>
                <div className="flex items-center mt-auto">
                  <BadgeCheck className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm">Real-time system monitoring</span>
                </div>
              </div>
              
              <div className="glass-morphism rounded-3xl p-8 hover-glow transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl primary-gradient flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">AI Model Updates</h3>
                <p className="text-muted-foreground mb-6">
                  Receive regular updates with the latest AI improvements, expanding your assistant's capabilities and knowledge without additional cost.
                </p>
                <div className="flex items-center mt-auto">
                  <BadgeCheck className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm">Automatic model improvements</span>
                </div>
              </div>
              
              <div className="glass-morphism rounded-3xl p-8 hover-glow transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl primary-gradient flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Conversation Training</h3>
                <p className="text-muted-foreground mb-6">
                  We continually refine your assistant's responses based on real conversations, ensuring increased accuracy and customer satisfaction.
                </p>
                <div className="flex items-center mt-auto">
                  <BadgeCheck className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm">Continuous improvement</span>
                </div>
              </div>
              
              <div className="glass-morphism rounded-3xl p-8 hover-glow transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl primary-gradient flex items-center justify-center mb-6">
                  <LineChart className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Performance Analytics</h3>
                <p className="text-muted-foreground mb-6">
                  Access comprehensive dashboards showing conversation metrics, customer satisfaction scores, and ROI calculations.
                </p>
                <div className="flex items-center mt-auto">
                  <BadgeCheck className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm">Actionable business insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section id="results" className="section-padding bg-gradient-to-b from-black/90 to-background/90 relative">
          <div className="container mx-auto">
            <SectionHeading 
              title="Success Stories"
              subtitle="See how businesses like yours achieve outstanding results with our AI voice assistants."
            />
            
            <div ref={scrollRef} className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {caseStudies.map((caseStudy, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <CaseStudyCard
                        title={caseStudy.title}
                        results={caseStudy.results}
                        className="mx-auto max-w-3xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                <button
                  onClick={handlePrevSlide}
                  className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover-glow"
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        activeSlide === index ? "bg-primary" : "bg-white/20"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={handleNextSlide}
                  className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover-glow"
                  aria-label="Next case study"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Implementation Process */}
        <section className="section-padding bg-gradient-to-b from-background/90 to-black/80">
          <div className="container mx-auto">
            <SectionHeading 
              title="Simple Implementation Process"
              subtitle="Getting started with EXACT AI is straightforward and seamless."
            />
            
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                <div className="md:text-right relative">
                  <div className="absolute right-0 md:left-auto top-0 transform translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                    <div className="text-black font-bold text-sm">1</div>
                  </div>
                  <div className="glass-morphism rounded-2xl p-6 md:ml-6 md:mr-0">
                    <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center mb-4 md:ml-auto">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Discovery Call</h3>
                    <p className="text-muted-foreground">
                      We'll discuss your business needs, use cases, and goals to create a tailored implementation plan for your AI assistant.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 transform translate-x-[-50%] w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                    <div className="text-black font-bold text-sm">2</div>
                  </div>
                  <div className="glass-morphism rounded-2xl p-6 md:mr-6">
                    <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Custom Configuration</h3>
                    <p className="text-muted-foreground">
                      Our team builds your AI assistant with industry-specific knowledge, integration with your systems, and your brand voice.
                    </p>
                  </div>
                </div>
                
                <div className="md:text-right relative">
                  <div className="absolute right-0 md:left-auto top-0 transform translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                    <div className="text-black font-bold text-sm">3</div>
                  </div>
                  <div className="glass-morphism rounded-2xl p-6 md:ml-6 md:mr-0">
                    <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center mb-4 md:ml-auto">
                      <Loader className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Testing & Training</h3>
                    <p className="text-muted-foreground">
                      We conduct extensive testing with real-world scenarios and fine-tune the AI based on your feedback and requirements.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 transform translate-x-[-50%] w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                    <div className="text-black font-bold text-sm">4</div>
                  </div>
                  <div className="glass-morphism rounded-2xl p-6 md:mr-6">
                    <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
                    <p className="text-muted-foreground">
                      We deploy your AI assistant across your selected channels and provide ongoing optimization and 24/7 monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold mb-6 text-gradient">Typical Implementation Timeline: 2-4 Weeks</h3>
              <ButtonHoverEffect>
                <button 
                  onClick={() => scrollToSection("next-steps")}
                  className="px-8 py-4 rounded-full bg-white text-black font-medium"
                >
                  Get Started Now
                </button>
              </ButtonHoverEffect>
            </div>
          </div>
        </section>
        
        {/* Next Steps Section */}
        <section id="next-steps" className="section-padding bg-black relative glow">
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full primary-gradient flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Transform Your Business Communication?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a consultation with our AI specialists to discuss your specific needs and discover how EXACT AI can elevate your customer interactions.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <ButtonHoverEffect>
                  <button className="px-8 py-4 rounded-full primary-gradient text-white font-medium flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book a Consultation
                  </button>
                </ButtonHoverEffect>
                
                <ButtonHoverEffect>
                  <button 
                    onClick={handlePlayAudio}
                    className="px-8 py-4 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2 transition-colors hover:bg-white/90"
                  >
                    <Phone className="w-5 h-5" />
                    Request a Demo
                  </button>
                </ButtonHoverEffect>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                *Implementation begins at $4,000 with flexible pricing based on your requirements
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="glass-morphism border-t border-white/5 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <ExactLogo className="mb-4" />
              <p className="text-sm text-muted-foreground">
                Revolutionizing business communication with advanced AI voice assistants.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support AI</a></li>
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sales AI Assistant</a></li>
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Custom Voice Design</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#next-steps" className="text-sm text-muted-foreground hover:text-primary transition-colors">Schedule a Call</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">hello@exactai.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2025 EXACT AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
