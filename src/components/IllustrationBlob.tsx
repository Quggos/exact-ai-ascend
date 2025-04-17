
import React from "react";
import { cn } from "@/lib/utils";

type IllustrationBlobProps = {
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
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
    xl: "w-[40rem] h-[40rem]",
  };

  return (
    <div 
      className={cn(
        "absolute -z-10 blur-3xl opacity-40 rounded-full animate-pulse",
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
      {/* Enhanced flowing ribbons */}
      <div className="absolute top-1/4 left-0 w-full h-40 transform -rotate-6">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-blue-500/15 to-transparent animate-[moveLeftRight_15s_linear_infinite]" />
      </div>
      
      <div className="absolute top-2/3 left-0 w-full h-32 transform rotate-6">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-[moveRightLeft_20s_linear_infinite]" />
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-[15%] left-[15%] w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transform rotate-12 animate-float-slow" />
      <div className="absolute top-[60%] right-[20%] w-24 h-24 rounded-2xl bg-blue-500/5 backdrop-blur-xl border border-blue-500/10 shadow-lg transform -rotate-12 animate-float" />
      <div className="absolute top-[40%] left-[75%] w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg animate-float-slow" />
      <div className="absolute top-[70%] left-[10%] w-18 h-18 rounded-full bg-blue-400/5 backdrop-blur-xl border border-blue-400/10 shadow-lg animate-float" />
      
      {/* New glossy elements */}
      <div className="absolute top-[30%] right-[30%] w-12 h-12 rounded-xl glossy-card transform rotate-45 animate-float" />
      <div className="absolute top-[50%] left-[30%] w-16 h-16 rounded-full primary-gradient opacity-20 blur-xl animate-pulse" />
      <div className="absolute top-[25%] right-[10%] w-24 h-8 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20 transform -rotate-15 animate-float-slow" />
      <div className="absolute top-[80%] right-[25%] w-20 h-6 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 backdrop-blur-md animate-float" />
    </div>
  );
};

export const CircleGlow = ({ className, color = "blue", size = "md" }: { className?: string, color?: "blue" | "white", size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  return (
    <div className={cn(
      "relative aspect-square rounded-full animate-pulse",
      color === "blue" ? "bg-blue-900/20" : "bg-white/5",
      sizeClasses[size],
      className
    )}>
      <div className={cn(
        "absolute inset-0 rounded-full blur-xl",
        color === "blue" ? "bg-blue-500/30" : "bg-white/15"
      )} />
      <div className={cn(
        "absolute inset-2 rounded-full blur-md",
        color === "blue" ? "bg-blue-600/15" : "bg-white/10"
      )} />
      <div className={cn(
        "absolute inset-0 rounded-full",
        "border",
        color === "blue" ? "border-blue-500/30" : "border-white/15"
      )} />
    </div>
  );
};

export const FlowingRibbon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute -z-10 overflow-hidden", className)}>
      <div className="relative w-[1000px] h-48">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-blue-400/30 to-blue-300/15 rounded-full blur-3xl transform -skew-x-12 -rotate-3" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-blue-600/30 to-blue-400/15 rounded-full blur-2xl transform skew-x-12 rotate-6" />
        <div className="absolute inset-12 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rounded-full blur-xl animate-pulse" />
      </div>
    </div>
  );
};

// New component for enhancing 3D glossy effects
export const GlossyShape = ({ 
  className, 
  shape = "circle", 
  color = "blue", 
  size = "md" 
}: { 
  className?: string, 
  shape?: "circle" | "square" | "hexagon", 
  color?: "blue" | "white" | "gradient", 
  size?: "sm" | "md" | "lg" 
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-28 h-28",
  };
  
  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-xl",
    hexagon: "rounded-xl transform rotate-45",
  };
  
  const colorClasses = {
    blue: "bg-gradient-to-br from-blue-400/30 to-blue-600/30 border-blue-500/30",
    white: "bg-gradient-to-br from-white/10 to-white/5 border-white/20",
    gradient: "bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-600/20 border-blue-400/20",
  };
  
  return (
    <div className={cn(
      "relative backdrop-blur-xl shadow-lg border shine animate-float-slow",
      sizeClasses[size],
      shapeClasses[shape],
      colorClasses[color],
      className
    )}>
      <div className={cn(
        "absolute inset-[2px]",
        shapeClasses[shape],
        color === "blue" ? "bg-gradient-to-br from-blue-500/5 to-transparent" : 
        color === "white" ? "bg-gradient-to-br from-white/5 to-transparent" : 
        "bg-gradient-to-br from-blue-400/5 via-blue-500/5 to-transparent"
      )} />
    </div>
  );
};
