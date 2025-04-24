import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Radio, Headphones, ShoppingBag, Building2, CreditCard, Truck, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonHoverEffect } from '@/components/ui/button-hover-effect';

// Industry data
const industries = [
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    benefits: [
      'Automates product inquiries and recommendations',
      'Handles order status and tracking updates',
      'Processes returns and exchanges efficiently',
      'Provides 24/7 shopping assistance'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    benefits: [
      'Automates appointment booking and confirmations',
      'Sends reminders and follow-ups',
      'Handles FAQs or intake info',
      'Reduces call volume for human staff'
    ]
  },
  {
    id: 'banking',
    name: 'Banking & Fintech',
    benefits: [
      'Handles balance inquiries and simple transactions',
      'Provides account status information',
      'Assists with bill payments and transfers',
      'Screens and routes complex inquiries to staff'
    ]
  },
  {
    id: 'logistics',
    name: 'Logistics & Delivery',
    benefits: [
      'Tracks shipments and provides updates',
      'Schedules pickups and deliveries',
      'Handles delivery exceptions and rerouting',
      'Provides estimates and service information'
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate & Property Management',
    benefits: [
      'Schedules property viewings and tours',
      'Answers common property questions',
      'Handles maintenance requests',
      'Pre-qualifies potential buyers/renters'
    ]
  }
];

// Sample voice data with specific MP3 files for each industry and language
const voiceSamples = [
  {
    id: 'en',
    language: 'English',
    flag: '🇺🇸',
    transcript: 'Hello, I can help you schedule an appointment with our clinic.',
    waveform: [10, 25, 18, 32, 40, 30, 20, 35, 42, 28, 15, 22, 30, 38, 25, 15, 28, 35, 20, 10],
    audioFiles: {
      ecommerce: '/audio/ecommerce/en.mp3',
      healthcare: '/audio/healthcare/en.mp3',
      banking: '/audio/banking/en.mp3',
      logistics: '/audio/logistics/en.mp3',
      realestate: '/audio/realestate/en.mp3'
    }
  },
  {
    id: 'es',
    language: 'Spanish',
    flag: '🇪🇸',
    transcript: 'Hola, puedo ayudarle a programar una cita con nuestra clínica.',
    waveform: [8, 20, 35, 24, 42, 28, 18, 30, 38, 20, 10, 28, 35, 15, 25, 40, 22, 30, 18, 12],
    audioFiles: {
      ecommerce: '/audio/ecommerce/es.mp3',
      healthcare: '/audio/healthcare/es.mp3',
      banking: '/audio/banking/es.mp3',
      logistics: '/audio/logistics/es.mp3',
      realestate: '/audio/realestate/es.mp3'
    }
  },
  {
    id: 'fr',
    language: 'French',
    flag: '🇫🇷',
    transcript: 'Bonjour, je peux vous aider à prendre rendez-vous dans notre clinique.',
    waveform: [15, 30, 20, 38, 25, 18, 32, 40, 22, 28, 35, 15, 25, 30, 18, 42, 30, 20, 28, 10],
    audioFiles: {
      ecommerce: '/audio/ecommerce/fr.mp3',
      healthcare: '/audio/healthcare/fr.mp3',
      banking: '/audio/banking/fr.mp3',
      logistics: '/audio/logistics/fr.mp3',
      realestate: '/audio/realestate/realestate/fr.mp3'
    }
  }
];

interface AudioSampleProps {
  sample: typeof voiceSamples[0];
  currentIndustry: string;
}

const WaveformAnimation = ({ isPlaying, waveform }: { isPlaying: boolean, waveform: number[] }) => (
  <div className="flex items-center gap-0.5 h-8 mr-3">
    {waveform.map((height, index) => (
      <motion.div
        key={index}
        className="w-0.5 bg-gradient-to-t from-[#FC576E] to-[#FFA57A]"
        initial={{ height: 2 }}
        animate={{ 
          height: isPlaying ? `${height}px` : 2,
          opacity: isPlaying ? 1 : 0.5 
        }}
        transition={{
          duration: 0.5,
          repeat: isPlaying ? Infinity : 0,
          repeatType: "reverse",
          delay: index * 0.05
        }}
      />
    ))}
  </div>
);

const AudioSample = ({ sample, currentIndustry }: AudioSampleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(sample.audioFiles[currentIndustry as keyof typeof sample.audioFiles]);
    
    // Set up audio event listeners
    audioRef.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current?.duration || 0);
    });

    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [sample, currentIndustry]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      audioRef.current.play();
      intervalRef.current = window.setInterval(() => {
        if (audioRef.current) {
          setProgress(audioRef.current.currentTime);
        }
      }, 100);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-5 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg rounded-xl mb-4 border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-xl">
      <div className="flex items-center mb-3">
        <span className="text-xl mr-2">{sample.flag}</span>
        <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{sample.language}</span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{sample.transcript}</p>
      
      <div className="flex items-center">
        <button 
          onClick={togglePlay}
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] mr-3 shadow-lg hover:scale-105 transition-transform"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white relative z-10" />
          ) : (
            <Play className="w-5 h-5 text-white relative z-10 pl-0.5" />
          )}
        </button>
        
        {isPlaying && (
          <WaveformAnimation isPlaying={isPlaying} waveform={sample.waveform} />
        )}
        
        <div className="h-1.5 bg-white/10 rounded-full flex-1 overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-[#FFA57A] to-[#FC576E] rounded-full transition-all duration-300"
            style={{ width: `${(progress / duration) * 100}%` }}
          />
        </div>
        
        <span className="text-xs text-muted-foreground ml-3 font-mono">
          {Math.floor(progress / 60)}:{(Math.floor(progress) % 60).toString().padStart(2, '0')}
        </span>
        
        <div className="ml-3 cursor-pointer text-white/70 hover:text-white transition-colors">
          <Volume2 className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const IndustryIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFA4A4]/20 to-[#EB2525]/20 backdrop-blur-sm mr-4 border border-white/10">
    <div className="text-white">{icon}</div>
  </div>
);

export const VoiceBotShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState('ecommerce');
  
  // Get the current industry data
  const currentIndustry = industries.find(ind => ind.id === activeIndustry) || industries[0];

  return (
    <section className="py-24 overflow-hidden relative" id="voice-bot">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-[#FFA57A]/10 to-[#FC576E]/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-[60%] -right-[20%] w-[60%] h-[60%] bg-gradient-to-br from-[#FFA57A]/15 to-[#FC576E]/10 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Heading area */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-gradient tracking-tight mb-5">
            This Is How Your Business Could{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-transparent bg-clip-text">Sound</span>
            </span>
          </h2>
          
          <p className="text-md md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let your customers talk — our VoiceBot listens, answers, and acts like a real assistant, 
            trained just for your business.
          </p>
        </div>

        {/* Industry tabs */}
        <div className="flex items-center justify-center overflow-x-auto pb-4 mb-14 scrollbar-hide">
          <div className="flex flex-wrap justify-center gap-2 px-4 max-w-6xl mx-auto">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white shadow-lg shadow-[#EB2525]/20'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Two column layout */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Left column - Benefits */}
          <div className="p-8 transition-all">
            <div className="flex items-center mb-4 sm:mb-16">
              <h3 className="text-3xl sm:text-6xl lg:text-6xl text-gradient tracking-[-0.02em] font-display font-medium py-1">Key benefits</h3>
            </div>
            
            <ul className="text-lg space-y-2">
              {currentIndustry.benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] mr-3 flex-shrink-0"></div>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Voice samples */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFA4A4]/20 to-[#EB2525]/20 backdrop-blur-sm mr-4 border border-white/10">
                <Headphones className="w-6 h-6 text-white/90" />
              </div>
              <h3 className="text-2xl font-display font-medium">Listen to samples</h3>
            </div>
            
            <div className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-center"
                >
                  {voiceSamples.map((sample, index) => (
                    <motion.div
                      key={sample.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <AudioSample sample={sample} currentIndustry={activeIndustry} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-16">
          <ButtonHoverEffect>
            <button
              onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-full bg-black border-2 border-transparent bg-clip-padding relative font-medium flex items-center justify-center gap-2 w-full group hover:text-white transition-colors"
              style={{ 
                backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #FFA57A, #FC576E)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              Learn more
            </button>
          </ButtonHoverEffect>
        </div>
      </div>
    </section>
  );
};

export default VoiceBotShowcase; 