
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
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-40 blur-md transition-all duration-300 group-hover:opacity-100 group-hover:blur group-hover:scale-105" />
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 blur-sm transition-all duration-300 group-hover:opacity-90" />
      <div className="shine relative">{children}</div>
    </div>
  );
};
