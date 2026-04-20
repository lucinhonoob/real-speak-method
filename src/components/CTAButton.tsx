import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CHECKOUT_URL = "https://go.hotmart.com/L103540759E?ap=b733";

interface Props {
  children: React.ReactNode;
  size?: "default" | "lg" | "xl";
  pulse?: boolean;
  className?: string;
}

export const CTAButton = ({ children, size = "default", pulse = false, className }: Props) => {
  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl md:text-2xl",
  };
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 gradient-cta text-primary-foreground font-bold rounded-xl shadow-cta uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_50px_-5px_hsl(45_96%_56%_/_0.8)]",
        sizeClasses[size],
        pulse && "pulse-cta",
        className,
      )}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};
