"use client";

import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  icon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", icon = true, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium group",
          // Variants
          variant === "primary" && "bg-foreground text-background hover:scale-105 active:scale-95",
          variant === "secondary" && "bg-transparent text-foreground border border-white/20 hover:border-white hover:bg-white/5",
          variant === "outline" && "border border-foreground text-foreground hover:bg-foreground hover:text-background",
          // Sizes
          size === "default" && "h-12 px-8 text-base",
          size === "lg" && "h-16 px-10 text-lg",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {icon && (
          <span className={cn(
            "ml-3 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-x-1",
            variant === "primary" ? "bg-background text-foreground w-6 h-6" : "bg-white/10 w-6 h-6"
          )}>
            <ArrowLeft className="w-3 h-3" />
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
