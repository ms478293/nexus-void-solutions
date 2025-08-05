import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HologramCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "quantum" | "neural" | "void";
}

const HologramCard = ({
  children,
  className,
  glowColor = "quantum",
}: HologramCardProps) => {
  const glowStyles = {
    quantum: "shadow-quantum border-primary/30",
    neural: "shadow-neural border-accent/30",
    void: "shadow-void border-border",
  };

  return (
    <Card
      className={cn(
        "relative overflow-hidden bg-card/50 backdrop-blur-lg border transition-all duration-300",
        "hover:scale-105 hover:shadow-2xl",
        "before:absolute before:inset-0 before:bg-gradient-hologram before:opacity-5 before:animate-hologram-flicker",
        glowStyles[glowColor],
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </Card>
  );
};

export default HologramCard;