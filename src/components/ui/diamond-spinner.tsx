
import { cn } from "@/lib/utils";

interface DiamondSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const DiamondSpinner = ({ className, size = "md" }: DiamondSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div 
        className={cn(
          "relative animate-spin-diamond",
          sizeClasses[size]
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 transform rotate-45 rounded-sm shadow-lg"></div>
        <div className="absolute inset-1 bg-white transform rotate-45 rounded-sm"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-purple-600 transform rotate-45 rounded-sm"></div>
      </div>
    </div>
  );
};

export default DiamondSpinner;
