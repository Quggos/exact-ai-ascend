
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
      "glossy-card shine p-8 rounded-xl hover-glow transition-all duration-500 h-full flex flex-col",
      className
    )}>
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <h3 className="font-display text-xl font-semibold mb-3 gradient-text-blue">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{description}</p>
      
      {ctaText && ctaAction && (
        <ButtonHoverEffect className="mt-auto">
          <button
            onClick={ctaAction}
            className="w-full px-6 py-3 rounded-full bg-secondary text-white text-sm font-medium transition-all duration-300"
          >
            {ctaText}
          </button>
        </ButtonHoverEffect>
      )}
    </div>
  );
}
