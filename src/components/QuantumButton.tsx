import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuantumButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const QuantumButton = ({
  children,
  className,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
}: QuantumButtonProps) => {
  const variantStyles = {
    primary: "bg-gradient-quantum text-primary-foreground hover:shadow-quantum border-primary/30",
    secondary: "bg-gradient-neural text-accent-foreground hover:shadow-neural border-accent/30",
    danger: "bg-destructive text-destructive-foreground hover:shadow-neural border-destructive/30",
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden border transition-all duration-300 animate-quantum-pulse",
        "before:absolute before:inset-0 before:bg-gradient-hologram before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-20 hover:scale-105",
        variantStyles[variant],
        className
      )}
    >
      <span className="relative z-10 font-orbitron font-bold">{children}</span>
    </Button>
  );
};

export default QuantumButton;