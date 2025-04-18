
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function ExactLogo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="bg-gradient-to-br from-[#ffffff] via-[#ffffffe6] to-[#ffffffb3] bg-clip-text text-transparent">EXACT</span>
        <span className="text-[#2B8AE2] ml-1">AI</span>
      </span>
    </div>
  );
}
