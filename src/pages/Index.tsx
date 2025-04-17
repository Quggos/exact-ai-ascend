
import { useRef, useState } from "react";
import { ExactLogo } from "@/components/ExactLogo";
import { ButtonHoverEffect } from "@/components/ui/button-hover-effect";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { FeatureCard } from "@/components/ui/feature-card";
import { CaseStudyCard } from "@/components/ui/case-study-card";

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
  Settings,
  Shield,
  Smartphone
} from "lucide-react";

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      <header className="sticky top-0 z-50 glass-morphism backdrop-blur-xl border-b border-white/5">
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
            <button className="px-5 py-2 rounded-lg bg-background/50 border border-white/10 text-sm font-medium hover:bg-background/70 transition-colors">
              Book a Call
            </button>
          </ButtonHoverEffect>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative section-padding pt-28 pb-36 overflow-hidden glow">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                <span className="text-gradient">Revolutionize</span> Your Business with AI Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                EXACT AI delivers cutting-edge conversational AI assistants that transform customer interactions and drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonHoverEffect>
                  <button 
                    onClick={handlePlayAudio}
                    className="px-6 py-3 rounded-lg primary-gradient text-white font-medium flex items-center justify-center gap-2"
                  >
                    <Headphones className="w-5 h-5" />
                    Listen to Sample
                  </button>
                </ButtonHoverEffect>
                <p className="text-muted-foreground text-sm mt-2 sm:mt-4 sm:ml-2">*Starting from $4000</p>
              </div>
            </div>
            
            <div className="relative z-10 animate-fade-in flex justify-center lg:justify-end">
              <PhoneMockup 
                className="animate-float" 
                showPlayButton={true}
                onPlay={handlePlayAudio}
              />
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section id="use-cases" className="section-padding bg-gradient-to-b from-background to-black/80">
          <div className="container mx-auto">
            <SectionHeading 
              title="Transformative Use Cases"
              subtitle="Our AI assistant adapts seamlessly to your business needs, delivering exceptional results across multiple domains."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-morphism rounded-xl p-8 hover-glow">
                <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6">
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
                <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6">
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
                <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Customized Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tailor-made workflows for your industry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Integration with existing systems and CRMs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Continuous optimization based on feedback</span>
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
        
        {/* Statistics Section */}
        <section className="section-padding bg-black relative glow">
          <div className="container mx-auto">
            <SectionHeading 
              title="Measurable Results"
              subtitle="Our AI solutions deliver tangible business outcomes with proven ROI."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-8">
                <div className="glass-morphism rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">65%</div>
                  <p className="text-sm text-muted-foreground">Support Cost Reduction</p>
                </div>
                
                <div className="glass-morphism rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">24/7</div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                </div>
                
                <div className="glass-morphism rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">+41%</div>
                  <p className="text-sm text-muted-foreground">Lead Conversion</p>
                </div>
                
                <div className="glass-morphism rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">95%</div>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <PhoneMockup 
                  showPlayButton={true}
                  onPlay={handlePlayAudio}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="section-padding bg-gradient-to-b from-black/80 to-background">
          <div className="container mx-auto">
            <SectionHeading 
              title="Advanced AI Features"
              subtitle="Our intelligent assistant combines cutting-edge technology with practical business applications."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={HeartPulse}
                title="Emotion Detection"
                description="Our AI recognizes customer sentiment and adapts responses accordingly, ensuring empathetic and effective communication."
                ctaText="Learn More"
                ctaAction={() => scrollToSection("next-steps")}
              />
              
              <FeatureCard
                icon={Languages}
                title="Multilingual Support"
                description="Communicate with customers in over 30 languages with natural fluency, expanding your global reach instantly."
                ctaText="Learn More"
                ctaAction={() => scrollToSection("next-steps")}
              />
              
              <FeatureCard
                icon={MessageSquare}
                title="Multi-Channel Integration"
                description="Seamlessly deploy across websites, messaging apps, voice systems, and social media platforms for consistent customer experiences."
                ctaText="Learn More"
                ctaAction={() => scrollToSection("next-steps")}
              />
              
              <FeatureCard
                icon={Calendar}
                title="Intelligent Reporting"
                description="Receive daily and weekly insights on customer interactions, highlighting trends, common issues, and optimization opportunities."
                ctaText="Learn More"
                ctaAction={() => scrollToSection("next-steps")}
              />
            </div>
          </div>
        </section>
        
        {/* Support Section */}
        <section id="support" className="section-padding bg-background relative glow">
          <div className="container mx-auto">
            <SectionHeading 
              title="Premium Support & Maintenance"
              subtitle="We're committed to your long-term success with comprehensive technical and strategic support."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-morphism rounded-xl p-8 hover-glow flex flex-col h-full">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">24/7 Monitoring & Support</h3>
                  <p className="text-muted-foreground mb-6">
                    Our expert team proactively monitors your AI system around the clock, ensuring optimal performance and immediate response to any issues.
                  </p>
                </div>
                <div className="pt-4 mt-auto">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Real-time system monitoring</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Priority technical support</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism rounded-xl p-8 hover-glow flex flex-col h-full">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">Strategic Updates</h3>
                  <p className="text-muted-foreground mb-6">
                    Stay ahead with regular strategy calls, the latest AI model upgrades, and continuous improvements to your implementation.
                  </p>
                </div>
                <div className="pt-4 mt-auto">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Monthly strategy calls</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Latest AI model upgrades</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism rounded-xl p-8 hover-glow flex flex-col h-full">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">Data & Analytics</h3>
                  <p className="text-muted-foreground mb-6">
                    Transform conversations into actionable business intelligence with our comprehensive analytics and custom dashboard.
                  </p>
                </div>
                <div className="pt-4 mt-auto">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Comprehensive data analysis</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Custom business dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section id="results" className="section-padding bg-gradient-to-b from-background to-black/80 relative">
          <div className="container mx-auto">
            <SectionHeading 
              title="Success Stories"
              subtitle="See how businesses like yours achieve outstanding results with our AI solutions."
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
        
        {/* Next Steps Section */}
        <section id="next-steps" className="section-padding bg-black relative glow">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a consultation with our AI specialists to discuss your specific needs and discover how EXACT AI can elevate your business.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <ButtonHoverEffect>
                  <button className="px-8 py-4 rounded-lg primary-gradient text-white font-medium flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book a Consultation
                  </button>
                </ButtonHoverEffect>
                
                <ButtonHoverEffect>
                  <button 
                    onClick={handlePlayAudio}
                    className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors hover:bg-white/10"
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
                Revolutionizing business communication with advanced AI solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support</a></li>
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sales Acceleration</a></li>
                <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Custom Implementation</a></li>
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
