import { ButtonHoverEffect } from "@/components/ui/button-hover-effect";
import { MessageSquare } from "lucide-react";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section className="relative pt-28 pb-0.5 overflow-hidden">
      <div className="absolute opacity-60 inset-0 w-full h-[50vh]">
        <Aurora 
          colorStops={["#FFA57A", "#FC576E", "#7174C7"]}
          amplitude={0.8}
          blend={50}
          speed={1}
        />
      </div>
      
      <div className="flex flex-col gap items-center relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-4">
            AI Text Chat Assistants for Business
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-gradient font-display font-medium tracking-tight mb-6">
            Your Business, Elevated by Conversational AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            EXACT AI creates intelligent text chat assistants that transform customer interactions, automate support, and boost sales without losing the personal touch.
          </p>
          
          <div className="flex flex-col gap-4 items-center">
            <ButtonHoverEffect>
              <button 
                onClick={() => scrollToSection("demo")}
                className="px-6 py-3 rounded-full bg-black border-2 border-transparent bg-clip-padding relative font-medium flex items-center justify-center gap-2 w-full group hover:text-white transition-colors"
                style={{ 
                  backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #FFA57A, #FC576E)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <MessageSquare className="w-5 h-5" />
                Try Live Demo
              </button>
            </ButtonHoverEffect>
            <p className="text-muted-foreground text-sm">*Starting from $4000</p>
          </div>
        </div>

        <div className="relative -z-10 animate-fade-in w-full lg:-mt-20">
          <div className="relative">
            <img 
              src="/hero-chat-mockup.png" 
              alt="EXACT AI Chat Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 