import { useRef, useState, useEffect } from "react";
import { ExactLogo } from "@/components/ExactLogo";
import { ButtonHoverEffect } from "@/components/ui/button-hover-effect";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { FeatureCard } from "@/components/ui/feature-card";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  Compass,
  Database,
  FileCode,
  Gauge,
  Globe,
  Laptop,
  LightbulbIcon,
  LineChart,
  Loader,
  LucideIcon,
  MessageCircle,
  MessageSquare,
  MessageSquareDot,
  MessageSquareText,
  MessagesSquare,
  Minus,
  Plus,
  PlusCircle,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Tablet,
  User,
  Users,
  Wand2,
  Zap
} from "lucide-react";

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);
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
      title: "E-Commerce Support",
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
    },
    {
      title: "SaaS Company",
      results: {
        salesGrowth: "+38% upsells",
        moreClients: "+45% user adoption",
        reducedCosts: "-30% support tickets",
        moreFreeTime: "5hr/day saved for team"
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

  const toggleFeatureExpansion = (index: number) => {
    setExpandedFeatures(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const chatFeatures = [
    {
      title: "Contextual Understanding",
      description: "Our AI remembers past conversations, understands complex queries, and maintains context throughout interactions.",
      icon: BrainCircuit,
      details: "Unlike basic chatbots that respond to keywords, EXACT AI's text assistant understands the nuanced meaning behind customer messages. It maintains conversation history, recognizes references to previously discussed topics, and provides coherent, contextually appropriate responses even in complex, multi-turn conversations."
    },
    {
      title: "Multilingual Support",
      description: "Communicate with customers in over 30 languages with natural fluency and cultural awareness.",
      icon: Globe,
      details: "Expand your global reach instantly with our AI text assistant that speaks your customers' language. Not just basic translation, but culturally-aware communication that understands idioms, slang, and regional expressions. Each language model is specifically trained to maintain your brand voice across different languages and cultural contexts."
    },
    {
      title: "Automated Workflows",
      description: "Integrate with your business systems to automate tasks like appointment booking, order processing, and data entry.",
      icon: Zap,
      details: "Connect your AI assistant to your CRM, e-commerce platform, scheduling software, and more to automate complex workflows. The assistant can check inventory, process orders, book appointments, create tickets, update customer records, and trigger follow-up sequences – all without human intervention but with a remarkably human touch."
    },
    {
      title: "Sentiment Analysis",
      description: "Detect customer emotions and adapt responses to provide empathetic and appropriate assistance.",
      icon: MessageSquareDot,
      details: "Our AI assistant analyzes the emotional tone of customer messages to detect frustration, confusion, excitement, or urgency. It then adjusts its communication style accordingly – being more thorough with confused customers, more reassuring with frustrated ones, and more efficient with urgent requests. This emotional intelligence dramatically improves customer satisfaction."
    },
    {
      title: "Custom Knowledge Base",
      description: "Train your assistant with your product information, policies, and industry expertise for accurate responses.",
      icon: Database,
      details: "Your AI assistant becomes an extension of your team by ingesting your entire knowledge base – product catalogs, FAQs, policy documents, troubleshooting guides, and even past customer interactions. This creates a custom AI brain with deep expertise specific to your business, eliminating generic responses and ensuring accurate, brand-consistent information."
    },
    {
      title: "Analytics Dashboard",
      description: "Gain insights from conversations to improve products, services, and customer experience.",
      icon: BarChart3,
      details: "Transform every customer conversation into actionable business intelligence. Our analytics dashboard provides real-time insights into common questions, feature requests, pain points, and satisfaction levels. Track conversion rates, resolution times, and customer sentiment over time to continuously optimize your products and processes."
    }
  ];

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
          
          <div className="container mx-auto flex flex-col gap-16 items-center relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-4">
                AI Text Chat Assistants for Business
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Your Business, <span className="text-gradient">Elevated</span> by Conversational AI
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                EXACT AI creates intelligent text chat assistants that transform customer interactions, automate support, and boost sales without losing the personal touch.
              </p>
              
              <div className="flex flex-col gap-4 items-center">
                <ButtonHoverEffect>
                  <button 
                    onClick={() => scrollToSection("demo")}
                    className="px-6 py-3 rounded-full primary-gradient text-white font-medium flex items-center justify-center gap-2 w-full"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Try Live Demo
                  </button>
                </ButtonHoverEffect>
                <p className="text-muted-foreground text-sm">*Starting from $4000</p>
              </div>
            </div>
            
            <div className="relative z-10 animate-fade-in w-full max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-400/10 rounded-3xl blur-3xl -z-10 opacity-70"></div>
                <div className="glass-morphism rounded-3xl p-6 shadow-xl relative w-full">
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <div className="flex-1 text-center text-xs text-muted-foreground">EXACT AI Chat</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                      <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm max-w-[85%]">
                        <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end">
                      <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm max-w-[85%]">
                        <p>I need help finding the right subscription plan for my business</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                      <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm max-w-[85%]">
                        <p>I'd be happy to help you find the right plan! Could you tell me a bit about your business needs? Specifically:</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          <li>How many customer conversations do you handle monthly?</li>
                          <li>What's your primary goal? (Support, sales, etc.)</li>
                          <li>Do you need integration with any existing systems?</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end">
                      <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm max-w-[85%]">
                        <p>We're an e-commerce store with about 5,000 monthly conversations. Mostly for customer support and order tracking.</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                      <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm max-w-[85%]">
                        <p>Based on your needs, I'd recommend our Business plan at $6,000. This includes:</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          <li>Up to 10,000 conversations monthly</li>
                          <li>E-commerce platform integration</li>
                          <li>Order tracking automation</li>
                          <li>Custom knowledge base for your products</li>
                        </ul>
                        <p className="mt-2">Would you like to schedule a demo to see how it works with your store?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex">
                    <input type="text" placeholder="Type your message..." className="flex-1 bg-white/5 border border-white/10 rounded-l-full px-4 py-2 text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-primary" />
                    <button className="bg-blue-500 rounded-r-full px-4 py-2 text-white">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
        
        {/* Problem Solution Section */}
        <section className="section-padding bg-black relative">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
                  Common Business Challenges, <span className="text-blue-400">Solved</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our AI text assistant tackles the most pressing customer communication issues that businesses face today.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="glass-morphism rounded-2xl p-6 h-full">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Minus className="text-red-400 mr-2 w-5 h-5" />
                      Without EXACT AI
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <Minus className="w-4 h-4 text-red-400" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="text-white font-medium block mb-1">Overwhelmed support teams</span>
                          Struggling to handle high volumes of repetitive customer inquiries, leading to delays and burnout
                        </p>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <Minus className="w-4 h-4 text-red-400" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="text-white font-medium block mb-1">Lost sales opportunities</span>
                          Slow response times causing potential customers to abandon carts or choose competitors
                        </p>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <Minus className="w-4 h-4 text-red-400" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="text-white font-medium block mb-1">Limited business hours</span>
                          Missing out on global opportunities due to time zone constraints
                        </p>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <Minus className="w-4 h-4 text-red-400" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="text-white font-medium block mb-1">Inconsistent responses</span>
                          Different agents providing varying answers, creating customer confusion and frustration
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="glass-morphism rounded-2xl p-6 border-primary/30 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-0"></div>
                    <h3 className="text-xl font-bold mb-4 flex items-center relative z-10">
                      <PlusCircle className="text-blue-400 mr-2 w-5 h-5" />
                      With EXACT AI
                    </h3>
                    <ul className="space-y-4 relative z-10">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="text-white font-medium block mb-1">24/7 instant responses</span>
                          Immediate answers to customer questions at any time, with seamless human handoff for complex issues
                        </p>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="text-white font-medium block mb-1">Proactive sales conversion</span>
                          Intelligent product recommendations and guided shopping experiences that increase revenue
                        </p>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="text-white font-medium block mb-1">Global availability</span>
                          Serve customers across all time zones and languages, expanding your market reach
                        </p>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                        </div>
                        <p className="text-muted-foreground">
                          <span className="text-white font-medium block mb-1">Consistent brand voice</span>
                          Perfectly aligned messaging across all customer touchpoints with your exact brand tone
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <ButtonHoverEffect>
                  <button 
                    onClick={() => scrollToSection("next-steps")} 
                    className="px-8 py-3 rounded-full bg-white text-black font-medium"
                  >
                    Transform Your Customer Experience
                  </button>
                </ButtonHoverEffect>
              </div>
            </div>
          </div>
        </section>
        
        {/* Live Demo Section */}
        <section id="demo" className="section-padding bg-gradient-to-b from-black to-background relative">
          <div className="container mx-auto">
            <SectionHeading 
              title="Experience the Difference"
              subtitle="See how our AI text assistant transforms customer interactions in real-time."
            />
            
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
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTab === 0 ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
                          >
                            Customer Support
                          </button>
                          <button 
                            onClick={() => setActiveTab(1)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTab === 1 ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
                          >
                            Sales Inquiry
                          </button>
                          <button 
                            onClick={() => setActiveTab(2)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTab === 2 ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
                          >
                            Technical Question
                          </button>
                          <button 
                            onClick={() => setActiveTab(3)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTab === 3 ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
                          >
                            Subscription Management
                          </button>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="font-medium mb-2">Key Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                              <span className="text-sm text-muted-foreground">Instant, accurate responses</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                              <span className="text-sm text-muted-foreground">Natural conversation flow</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                              <span className="text-sm text-muted-foreground">Consistent brand voice</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                                  <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                                </div>
                              </div>
                              
                              <div className="flex items-start justify-end">
                                <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                                  <p>I can't log into my account. I keep getting an error message.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                                  <p>I'm sorry to hear you're having trouble logging in. Let's fix this right away. Could you tell me:</p>
                                  <ol className="mt-2 space-y-1 list-decimal list-inside">
                                    <li>What error message are you seeing exactly?</li>
                                    <li>Are you using the email address you registered with?</li>
                                    <li>Have you tried resetting your password?</li>
                                  </ol>
                                </div>
                              </div>
                              
                              <div className="flex items-start justify-end">
                                <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                                  <p>It says "Invalid credentials" and yes, I'm using the right email. I haven't tried resetting my password yet.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                                  <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                                </div>
                              </div>
                              
                              <div className="flex items-start justify-end">
                                <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                                  <p>I'm interested in your premium plan, but I need to know if it works with Shopify.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
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
                                <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                                  <p>We have about 200 products and process around 500 orders per month.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                                  <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                                </div>
                              </div>
                              
                              <div className="flex items-start justify-end">
                                <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                                  <p>How do I connect your chatbot to my website? Is there any code I need to add?</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
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
                                <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                                  <p>The no-code option sounds easier. Will it work with WordPress?</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
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
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                                  <p>Hello! I'm your EXACT AI assistant. How can I help you today?</p>
                                </div>
                              </div>
                              
                              <div className="flex items-start justify-end">
                                <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                                  <p>I need to change my billing information for my subscription.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
                                  <p>I'd be happy to help you update your billing information. To protect your account security, I'll need to verify a few details first. Could you please provide:</p>
                                  <ol className="mt-2 space-y-1 list-decimal list-inside">
                                    <li>The email address associated with your account</li>
                                    <li>Your company name (if applicable)</li>
                                  </ol>
                                </div>
                              </div>
                              
                              <div className="flex items-start justify-end">
                                <div className="glass-morphism rounded-2xl rounded-tr-none p-4 text-sm">
                                  <p>My email is john@techinnovate.com and the company is Tech Innovate LLC.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-800 font-bold text-xs ml-4 flex-shrink-0">U</div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-4 flex-shrink-0">AI</div>
                                <div className="glass-morphism rounded-2xl rounded-tl-none p-4 text-sm">
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
                              <input type="text" placeholder="Type your message..." className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 pr-12 text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-primary" />
                              <button className="absolute right-1 top-1 bg-blue-500 rounded-full p-2 text-white">
                                <ArrowRight className="w-4 h-4" />
                              </button>
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
        
        {/* Use Cases Section */}
        <section id="use-cases" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black/60"></div>
          
          <div className="container mx-auto relative z-10">
            <SectionHeading 
              title="Tailored for Your Industry"
              subtitle="Our AI text assistants adapt to specific business needs across sectors."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="glass-morphism hover-glow rounded-3xl h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="h-40 bg-gradient-to-r from-blue-800 to-blue-500 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center">
                        <Laptop className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mt-2 text-white">E-Commerce</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated product recommendations based on browsing history</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-time order tracking and shipping updates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Seamless returns and exchanges processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Abandoned cart recovery with personalized incentives</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span className="text-blue-400 font-medium">+35%</span>
                          <span className="text-muted-foreground ml-1">Conversion Rate</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">-40%</span>
                          <span className="text-muted-foreground ml-1">Support Costs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1">
                <div className="glass-morphism hover-glow rounded-3xl h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center">
                        <LineChart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mt-2 text-white">Financial Services</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Secure account balance and transaction inquiries</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Intelligent product matching to financial needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Compliance-verified explanations of services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Guided application and onboarding processes</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span className="text-blue-400 font-medium">+40%</span>
                          <span className="text-muted-foreground ml-1">Lead Quality</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">-35%</span>
                          <span className="text-muted-foreground ml-1">Onboarding Time</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1">
                <div className="glass-morphism hover-glow rounded-3xl h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center">
                        <FileCode className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mt-2 text-white">SaaS & Technology</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Technical troubleshooting with step-by-step guidance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Product feature explanations and use cases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Integration support with API documentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Subscription management and upgrade assistance</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span className="text-blue-400 font-medium">+45%</span>
                          <span className="text-muted-foreground ml-1">User Activation</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">-50%</span>
                          <span className="text-muted-foreground ml-1">Support Tickets</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-blue-800/20 via-blue-600/20 to-blue-800/20 rounded-3xl p-8 glass-morphism">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                  <p className="text-muted-foreground mb-6">
                    Beyond these examples, we create highly specialized AI chat assistants for healthcare, education, real estate, legal services, hospitality, and more. Each solution is built with industry-specific knowledge, compliance requirements, and user expectations in mind.
                  </p>
                  <ButtonHoverEffect>
                    <button 
                      onClick={() => scrollToSection("next-steps")} 
                      className="px-6 py-3 rounded-full bg-white text-black font-medium"
                    >
                      Discuss Your Industry Needs
                    </button>
                  </ButtonHoverEffect>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 glass-morphism rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm">Healthcare</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 glass-morphism rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm">Education</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 glass-morphism rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm">Real Estate</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 glass-morphism rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm">Legal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics & Integration Section */}
        <section className="section-padding bg-white text-black relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
          <div className="container mx-auto relative z-10">
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Measurable Results, Seamless Integration
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI chat assistant delivers ROI from day one and works with your existing tech stack.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-lg"></div>
                    <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden">
                      <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                      <div className="p-6 sm:p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Performance Dashboard</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-gray-600">Response Time</span>
                              <span className="text-sm font-bold text-blue-600">0.7s</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full">
                              <div className="h-full bg-blue-500 rounded-full" style={{width: "92%"}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-gray-600">Resolution Rate</span>
                              <span className="text-sm font-bold text-blue-600">87%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full">
                              <div className="h-full bg-blue-500 rounded-full" style={{width: "87%"}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-gray-600">User Satisfaction</span>
                              <span className="text-sm font-bold text-blue-600">94%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full">
                              <div className="h-full bg-blue-500 rounded-full" style={{width: "94%"}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-gray-600">Cost Reduction</span>
                              <span className="text-sm font-bold text-blue-600">38%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full">
                              <div className="h-full bg-blue-500 rounded-full" style={{width: "38%"}}></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 rounded-xl p-4">
                            <div className="text-2xl font-bold text-blue-600">+42%</div>
                            <div className="text-sm text-gray-600">Conversion Increase</div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-xl p-4">
                            <div className="text-2xl font-bold text-blue-600">-53%</div>
                            <div className="text-sm text-gray-600">Response Time</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Enterprise-Ready Platform</h3>
                  <p className="text-gray-600 mb-8">
                    EXACT AI is built for businesses of all sizes with enterprise-grade security, scalability, and integration capabilities. Our platform seamlessly connects with your existing technology stack to enhance your operations without disrupting workflows.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-gray-800">Enterprise Security</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        SOC2 compliant with end-to-end encryption and customizable data retention policies to meet your compliance requirements.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Code2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-gray-800">Open API</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Comprehensive RESTful API and webhooks for custom integrations, extensions, and workflows across your tech stack.
                      </p>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-700 mb-4">Integrates With Your Tech Stack:</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center">
                      <img src="https://www.hubx.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalesforce.b39bc7df.png&w=96&q=75" alt="Salesforce" className="h-5 w-auto" />
                      <span className="text-sm font-medium text-gray-600 ml-2">Salesforce</span>
                    </div>
                    
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center">
                      <img src="https://www.hubx.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzendesk.fa08e9a0.png&w=96&q=75" alt="Zendesk" className="h-5 w-auto" />
                      <span className="text-sm font-medium text-gray-600 ml-2">Zendesk</span>
                    </div>
                    
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center">
                      <img src="https://www.hubx.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhubspot.2b93e98c.png&w=96&q=75" alt="HubSpot" className="h-5 w-auto" />
                      <span className="text-sm font-medium text-gray-600 ml-2">HubSpot</span>
                    </div>
                    
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center">
                      <span className="text-sm font-medium text-gray-600">Shopify</span>
                    </div>
                    
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center">
                      <span className="text-sm font-medium text-gray-600">Slack</span>
                    </div>
                    
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center">
                      <span className="text-sm font-medium text-gray-600">+30 more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="section-padding bg-gradient-to-b from-gray-100 to-white text-black relative">
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Intelligence That Transforms Business
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the advanced capabilities that make our AI chat assistants indispensable for modern businesses.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="space-y-6">
                {chatFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleFeatureExpansion(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                            <feature.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          {expandedFeatures.includes(index) ? (
                            <Minus className="w-4 h-4 text-gray-600" />
                          ) : (
                            <Plus className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                      <p className="mt-2 text-gray-600 ml-16">{feature.description}</p>
                    </div>
                    
                    {expandedFeatures.includes(index) && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 ml-16 mr-8">
                        <p className="text-gray-600">{feature.details}</p>
                        <div className="mt-4 flex justify-end">
                          <ButtonHoverEffect>
                            <button 
                              onClick={() => scrollToSection("next-steps")} 
                              className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium"
                            >
                              Learn More
                            </button>
                          </ButtonHoverEffect>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <ButtonHoverEffect>
                  <button 
                    onClick={() => scrollToSection("next-steps")} 
                    className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium"
                  >
                    See All Features
                  </button>
                </ButtonHoverEffect>
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
              title="Enterprise-Grade Support"
              subtitle="We're committed to your success with comprehensive technical and strategic assistance."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-morphism rounded-3xl p-8 hover-glow transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl primary-gradient flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">24/7 Monitoring</h3>
                <p className="text-muted-foreground mb-6">
                  Our expert team proactively monitors your AI system around the clock, ensuring optimal performance and immediate response to any issues.
                </p>
                <div className="flex items-center mt-auto">
                  <BadgeCheck className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm">99.9% uptime guarantee</span>
                </div>
              </div>
              
              <div className="glass-morphism rounded-3xl p-8 hover-glow transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl primary-gradient flex items-center justify-center mb-6">
                  <Wand2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">AI Model Updates</h3>
                <p className="text-muted-foreground mb-6">
                  Receive regular updates with the latest AI improvements, expanding your assistant's capabilities and knowledge without additional cost.
                </p>
                <div className="flex items-center mt-auto">
                  <BadgeCheck className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm">Quarterly performance reviews</span>
                </div>
              </div>
              
              <div className="glass-morphism rounded-3xl p-8 hover-glow transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl primary-gradient flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Response Training</h3>
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
            
            <div className="mt-16 max-w-4xl mx-auto glass-morphism rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Customer Success Program</h3>
                  <p className="text-muted-foreground mb-6">
                    Every EXACT AI client is assigned a dedicated Customer Success Manager who helps with implementation, optimization, and strategic growth.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                      <span className="text-muted-foreground">Personalized onboarding and training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                      <span className="text-muted-foreground">Monthly strategy calls and performance reviews</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                      <span className="text-muted-foreground">Best practice guides and optimization expertise</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="glass-morphism rounded-xl p-4 border border-white/10">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-primary">
                        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Customer Success Manager" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium">Sarah Johnson</h4>
                        <p className="text-sm text-muted-foreground">Customer Success Director</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          "Our team is committed to understanding your unique business challenges and ensuring you extract maximum value from our AI solution."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-morphism rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Customer Satisfaction</h4>
                      <div className="flex">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      96% of our clients rate their Customer Success experience as "Excellent"
                    </p>
                  </div>
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
              subtitle="See how businesses like yours achieve outstanding results with our AI text assistants."
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
            
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="glass-morphism rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-0 opacity-30"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Michael Chen, CEO of TechFlow Solutions</h3>
                      <div className="flex mb-4">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      </div>
                      <blockquote className="text-muted-foreground italic">
                        "Implementing EXACT AI's text assistant has been transformative for our business. Our support team now handles 3x more inquiries without adding headcount, and our customer satisfaction scores have increased by 28%. The ROI was evident within the first month, and the implementation process was seamless."
                      </blockquote>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-morphism rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">3x</div>
                      <div className="text-sm text-muted-foreground">Increased capacity</div>
                    </div>
                    
                    <div className="glass-morphism rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">+28%</div>
                      <div className="text-sm text-muted-foreground">CSAT improvement</div>
                    </div>
                    
                    <div className="glass-morphism rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">30 days</div>
                      <div className="text-sm text-muted-foreground">to positive ROI</div>
                    </div>
                  </div>
                </div>
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
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Knowledge Training</h3>
                    <p className="text-muted-foreground">
                      We train the AI on your products, services, policies, and past customer interactions to build a custom knowledge base.
                    </p>
                  </div>
                </div>
                
                <div className="md:text-right relative">
                  <div className="absolute right-0 md:left-auto top-0 transform translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                    <div className="text-black font-bold text-sm">3</div>
                  </div>
                  <div className="glass-morphism rounded-2xl p-6 md:ml-6 md:mr-0">
                    <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center mb-4 md:ml-auto">
                      <Compass className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Integration & Testing</h3>
                    <p className="text-muted-foreground">
                      We integrate with your existing systems and conduct rigorous testing to ensure accuracy and optimal performance.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 transform translate-x-[-50%] w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                    <div className="text-black font-bold text-sm">4</div>
                  </div>
                  <div className="glass-morphism rounded-2xl p-6 md:mr-6">
                    <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center mb-4">
                      <LightbulbIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Launch & Optimize</h3>
                    <p className="text-muted-foreground">
                      We launch your AI assistant and provide ongoing optimization to continuously improve performance and results.
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
                <MessageSquareText className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Transform Your Customer Experience?
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
                    className="px-8 py-4 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2 transition-colors hover:bg-white/90"
                  >
                    <MessagesSquare className="w-5 h-5" />
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
                Transforming business communication with advanced AI text chat assistants.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support AI</a></li>
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sales AI Assistant</a></li>
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Custom AI Solutions</a></li>
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
