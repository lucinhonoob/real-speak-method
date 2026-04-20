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
    default: "px-5 py-3 text-sm sm:text-base",
    lg: "px-6 py-3.5 text-base sm:text-lg",
    xl: "px-6 py-4 text-base sm:text-lg md:text-xl lg:text-2xl sm:px-10 sm:py-5",
  };
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 gradient-cta text-primary-foreground font-bold rounded-xl shadow-cta uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_50px_-5px_hsl(45_96%_56%_/_0.8)] text-center leading-tight",
        sizeClasses[size],
        pulse && "pulse-cta",
        className,
      )}
    >
      <span className="break-words">{children}</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
    </a>
  );
};
