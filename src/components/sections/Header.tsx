import { ButtonHoverEffect } from "@/components/ui/button-hover-effect";
import { ExactLogo } from "@/components/ExactLogo";
interface HeaderProps {
  isSticky: boolean;
  scrollToSection: (id: string) => void;
}

export const Header = ({ isSticky, scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`${isSticky ? 'bg-black backdrop-blur-xl' : 'bg-transparent'} transition-all duration-200`}>
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Left section - Logo */}
            <div className="w-[200px]">
            <ExactLogo />
            </div>

            {/* Center section - Navigation */}
            <div className="flex-1 flex justify-center">
              <nav className="hidden md:flex space-x-8">
                <button 
                  onClick={() => scrollToSection("use-cases")} 
                  className="text-md font-medium hover:text-primary transition-colors"
                >
                  Use Cases
                </button>
                <button 
                  onClick={() => scrollToSection("features")} 
                  className="text-md font-medium hover:text-primary transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection("support")} 
                  className="text-md font-medium hover:text-primary transition-colors"
                >
                  Support
                </button>
                <button 
                  onClick={() => scrollToSection("results")} 
                  className="text-md font-medium hover:text-primary transition-colors"
                >
                  Results
                </button>
              </nav>
            </div>

            {/* Right section - Social icons and CTA */}
            <div className="w-[200px] flex items-center justify-end gap-6">
              <div className="flex items-center gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FC576E] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FC576E] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
              
              <ButtonHoverEffect>
                <button 
                  onClick={() => scrollToSection("next-steps")} 
                  className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors border-2 border-transparent bg-clip-padding"
                  style={{ 
                    backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #FFA57A, #FC576E)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                  }}
                >
                  Book a Call
                </button>
              </ButtonHoverEffect>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}; 