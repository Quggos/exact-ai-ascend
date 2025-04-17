
import React from "react";
import { cn } from "@/lib/utils";

type IllustrationBlobProps = {
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  direction?: "left" | "right";
};

export const IllustrationBlob = ({
  className,
  variant = "primary",
  size = "md",
  direction = "right",
}: IllustrationBlobProps) => {
  const variantClasses = {
    primary: "from-blue-500/80 via-blue-400/60 to-blue-300/40",
    secondary: "from-blue-400/80 via-blue-600/60 to-blue-500/40",
    accent: "from-blue-300/80 via-blue-500/60 to-blue-700/40",
  };

  const sizeClasses = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[32rem] h-[32rem]",
  };

  return (
    <div 
      className={cn(
        "absolute -z-10 blur-3xl opacity-40 rounded-full",
        "bg-gradient-to-br",
        variantClasses[variant],
        sizeClasses[size],
        direction === "left" ? "-left-1/4" : "-right-1/4",
        className
      )}
    />
  );
};

export const FloatingElements = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      {/* Flowing ribbon similar to the reference image */}
      <div className="absolute top-1/4 left-0 w-full h-32 transform -rotate-6">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-[moveLeftRight_15s_linear_infinite]" />
      </div>
      
      <div className="absolute top-2/3 left-0 w-full h-24 transform rotate-6">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-[moveRightLeft_20s_linear_infinite]" />
      </div>
      
      {/* Floating icons/elements */}
      <div className="absolute top-[15%] left-[15%] w-16 h-16 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transform rotate-12 animate-float-slow" />
      <div className="absolute top-[60%] right-[20%] w-20 h-20 rounded-xl bg-blue-500/5 backdrop-blur-md border border-blue-500/10 shadow-lg transform -rotate-12 animate-float" />
      <div className="absolute top-[40%] left-[75%] w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg animate-float-slow" />
      <div className="absolute top-[70%] left-[10%] w-14 h-14 rounded-full bg-blue-400/5 backdrop-blur-md border border-blue-400/10 shadow-lg animate-float" />
    </div>
  );
};

export const CircleGlow = ({ className, color = "blue" }: { className?: string, color?: "blue" | "white" }) => {
  return (
    <div className={cn(
      "relative aspect-square rounded-full",
      color === "blue" ? "bg-blue-900/20" : "bg-white/5",
      className
    )}>
      <div className={cn(
        "absolute inset-0 rounded-full blur-md",
        color === "blue" ? "bg-blue-500/20" : "bg-white/10"
      )} />
      <div className={cn(
        "absolute inset-2 rounded-full blur-sm",
        color === "blue" ? "bg-blue-600/10" : "bg-white/5"
      )} />
      <div className={cn(
        "absolute inset-0 rounded-full",
        "border",
        color === "blue" ? "border-blue-500/20" : "border-white/10"
      )} />
    </div>
  );
};

export const FlowingRibbon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute -z-10 overflow-hidden", className)}>
      <div className="relative w-[800px] h-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-300/10 rounded-full blur-2xl transform -skew-x-12 -rotate-3" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/20 to-blue-400/10 rounded-full blur-xl transform skew-x-12 rotate-6" />
        <div className="absolute inset-10 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-full blur-xl animate-pulse" />
      </div>
    </div>
  );
};
