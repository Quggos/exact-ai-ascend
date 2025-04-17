
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

type PhoneMockupProps = {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  alt?: string;
  showPlayButton?: boolean;
  onPlay?: () => void;
};

export function PhoneMockup({ 
  className,
  children,
  src = "/lovable-uploads/e4bd0f59-1912-4e0c-85ce-490daa157bfd.png",
  alt = "AI assistant interface",
  showPlayButton = false,
  onPlay
}: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto max-w-[280px] glow", className)}>
      <div className="absolute inset-0 rounded-[40px] border-8 border-black bg-black shadow-xl"></div>
      <div className="overflow-hidden rounded-[32px] bg-white aspect-[9/19.5] shadow-lg">
        <img 
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
        {children}
      </div>
      
      {showPlayButton && (
        <button 
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center group"
          aria-label="Play audio sample"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black/60 backdrop-blur-md group-hover:bg-primary transition-colors duration-300">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </button>
      )}
    </div>
  );
}
