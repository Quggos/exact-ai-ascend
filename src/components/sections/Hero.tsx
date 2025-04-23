import { ButtonHoverEffect } from "@/components/ui/button-hover-effect";
import { MessageSquare, Play, Pause } from "lucide-react";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import { useAudioPlayer } from "react-use-audio-player";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/hero-animation-play.json";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { load, play, pause } = useAudioPlayer();

  useEffect(() => {
    // Load your audio file here
    load("/hero-audio.mp3", {
      autoplay: false,
      loop: true,
    });
  }, [load]);

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -inset-24 flex items-center justify-center"
          >
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-48 h-48"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={togglePlay}
        className="relative w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {!isPlaying && (
            <motion.div
              key="play"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFA57A] to-[#FC576E] opacity-0 group-hover:opacity-100 transition-opacity"
            />
          )}
        </AnimatePresence>
        
        <motion.div
          animate={{
            scale: isPlaying ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isPlaying ? Infinity : 0,
            ease: "linear",
          }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white relative z-10" />
          ) : (
            <Play className="w-5 h-5 text-white relative z-10" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

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
            <div className="flex items-center gap-4">
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
              <AudioPlayer />
            </div>
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