
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonHoverEffect } from "./button-hover-effect";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  ctaText?: string;
  ctaAction?: () => void;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  ctaText,
  ctaAction,
}: FeatureCardProps) {
  return (
    <div className={cn(
      "backdrop-blur-xl bg-[#ffffff0d] border border-[#ffffff1a] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] p-6 rounded-xl hover:shadow-lg transition-all duration-300 h-full flex flex-col",
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B8AE2] via-[#2B8AE2cc] to-[#2B8AE299] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#ffffff]" />
        </div>
      </div>
      <h3 className="font-display text-lg font-semibold mb-2 text-[#ffffff]">{title}</h3>
      <p className="text-[#a1a1aa] text-sm mb-4 flex-grow">{description}</p>
      
      {ctaText && ctaAction && (
        <ButtonHoverEffect className="mt-auto">
          <button
            onClick={ctaAction}
            className="w-full px-4 py-2 rounded-lg bg-[#27272a] text-[#ffffff] text-sm font-medium transition-all duration-300"
          >
            {ctaText}
          </button>
        </ButtonHoverEffect>
      )}
    </div>
  );
}
