
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function ExactLogo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="text-gradient">EXACT</span>
        <span className="text-primary ml-1">AI</span>
      </span>
    </div>
  );
}
