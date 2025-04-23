import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Radio, Headphones, ShoppingBag, Building2, CreditCard, Truck, Home } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

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

// Sample voice data
const voiceSamples = [
  {
    id: 'en',
    language: 'English',
    flag: '🇺🇸',
    transcript: 'Hello, I can help you schedule an appointment with our clinic.',
    waveform: [10, 25, 18, 32, 40, 30, 20, 35, 42, 28, 15, 22, 30, 38, 25, 15, 28, 35, 20, 10]
  },
  {
    id: 'es',
    language: 'Spanish',
    flag: '🇪🇸',
    transcript: 'Hola, puedo ayudarle a programar una cita con nuestra clínica.',
    waveform: [8, 20, 35, 24, 42, 28, 18, 30, 38, 20, 10, 28, 35, 15, 25, 40, 22, 30, 18, 12]
  },
  {
    id: 'fr',
    language: 'French',
    flag: '🇫🇷',
    transcript: 'Bonjour, je peux vous aider à prendre rendez-vous dans notre clinique.',
    waveform: [15, 30, 20, 38, 25, 18, 32, 40, 22, 28, 35, 15, 25, 30, 18, 42, 30, 20, 28, 10]
  }
];

interface AudioSampleProps {
  sample: typeof voiceSamples[0];
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

const AudioSample = ({ sample }: AudioSampleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      let currentProgress = 0;
      intervalRef.current = window.setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);
        if (currentProgress >= 30) {
          clearInterval(intervalRef.current!);
          setIsPlaying(false);
          setProgress(0);
        }
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-5 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg rounded-xl mb-4 border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-xl"
    >
      <div className="flex items-center mb-3">
        <span className="text-xl mr-2">{sample.flag}</span>
        <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{sample.language}</span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{sample.transcript}</p>
      
      <div className="flex items-center">
        <motion.button 
          onClick={togglePlay}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] mr-3 shadow-lg"
        >
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] opacity-50 blur-md"
            animate={{ 
              scale: isPlaying ? [1, 1.2, 1] : 1,
              opacity: isPlaying ? [0.5, 0.2, 0.5] : 0.5
            }}
            transition={{ 
              duration: 2, 
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut" 
            }}
          />
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white relative z-10" />
          ) : (
            <Play className="w-5 h-5 text-white relative z-10 pl-0.5" />
          )}
        </motion.button>
        
        {isPlaying && (
          <WaveformAnimation isPlaying={isPlaying} waveform={sample.waveform} />
        )}
        
        <div className="h-1.5 bg-white/10 rounded-full flex-1 overflow-hidden backdrop-blur-sm">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#FFA57A] to-[#FC576E] rounded-full"
            style={{ width: `${(progress / 30) * 100}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${(progress / 30) * 100}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <span className="text-xs text-muted-foreground ml-3 font-mono">
          {progress < 10 ? '0:0' : '0:'}{progress}
        </span>
        
        <motion.div 
          whileHover={{ scale: 1.2 }}
          className="ml-3 cursor-pointer text-white/70 hover:text-white transition-colors"
        >
          <Volume2 className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const IndustryIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFA4A4]/20 to-[#EB2525]/20 backdrop-blur-sm mr-4 border border-white/10">
    <div className="text-white">{icon}</div>
  </div>
);

export const VoiceBotShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState('healthcare');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Get the current industry data
  const currentIndustry = industries.find(ind => ind.id === activeIndustry) || industries[1];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden relative" id="voice-bot">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-[#FFA57A]/10 to-[#FC576E]/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-[60%] -right-[20%] w-[60%] h-[60%] bg-gradient-to-br from-[#FFA57A]/15 to-[#FC576E]/10 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Heading area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-[#FFA57A]/20 to-[#FC576E]/20 border border-white/10 rounded-full py-1.5 px-4 mb-5"
          >
            <Radio className="w-4 h-4 mr-2 text-[#FC576E]" /> 
            <span className="text-sm font-medium">Voice-enabled AI Assistant</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-5">
            This Is How Your Business Could{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gradient">Sound</span>
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-md md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Let your customers talk — our VoiceBot listens, answers, and acts like a real assistant, 
            trained just for your business.
          </motion.p>
        </motion.div>

        {/* Industry tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-14 scrollbar-hide"
        >
          <div className="flex space-x-3 px-4">
            {industries.map((industry, index) => (
              <motion.button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? 'bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] text-white shadow-lg shadow-[#EB2525]/20'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {industry.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-lg"
          >
            <div className="flex items-center mb-6">
              <IndustryIcon icon={<Building2 className="w-6 h-6" />} />
              <h3 className="text-2xl font-display font-medium">Key benefits</h3>
            </div>
            
            
            <ul className="space-y-5">
              {currentIndustry.benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#FFA4A4] to-[#EB2525] mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/90">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column - Voice samples */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFA4A4]/20 to-[#EB2525]/20 backdrop-blur-sm mr-4 border border-white/10">
                <Headphones className="w-6 h-6 text-white/90" />
              </div>
              <h3 className="text-2xl font-display font-medium">Listen to samples</h3>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {voiceSamples.map((sample, index) => (
                    <motion.div
                      key={sample.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <AudioSample sample={sample} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.button
            onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full border-2 border-[#EB2525]/70 bg-gradient-to-r from-[#EB2525]/10 to-transparent text-[#FFA57A] hover:text-white hover:bg-[#EB2525]/20 transition-all duration-300 shadow-lg shadow-[#EB2525]/5 hover:shadow-[#EB2525]/20 font-medium"
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceBotShowcase; 