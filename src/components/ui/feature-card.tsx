
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
      "glass-morphism p-6 rounded-xl hover-glow transition-all duration-300 h-full flex flex-col",
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
      
      {ctaText && ctaAction && (
        <ButtonHoverEffect className="mt-auto">
          <button
            onClick={ctaAction}
            className="w-full px-4 py-2 rounded-lg bg-secondary text-white text-sm font-medium transition-all duration-300"
          >
            {ctaText}
          </button>
        </ButtonHoverEffect>
      )}
    </div>
  );
}
