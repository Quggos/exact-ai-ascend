
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
    <div className={cn("group relative", className)}>
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-purple-600 opacity-30 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur" />
      <div className="relative">{children}</div>
    </div>
  );
};
