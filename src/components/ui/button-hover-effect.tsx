import React from "react";
import { cn } from "@/lib/utils";

type ButtonHoverEffectProps = {
  children: React.ReactNode;
  className?: string;
};

export const ButtonHoverEffect = ({
  children,
  className,
}: ButtonHoverEffectProps) => {
  return (
    <div className={cn("group relative inline-block", className)}>
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-blue-500 opacity-30 blur transition-all duration-300 group-hover:opacity-100 group-hover:blur-md" />
      <div className="relative">{children}</div>
    </div>
  );
};
