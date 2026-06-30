import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-medium tracking-tight transition-colors duration-200 select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-amber text-[#0a0a0a] hover:bg-amber-soft shadow-[0_0_0_1px_rgba(240,180,41,0.3)]",
    secondary:
      "glass text-text border border-border hover:border-border-hover hover:bg-white/5",
    ghost: "text-text-dim hover:text-text",
  };

  const Comp: any = motion(href ? "a" : "button");

  return (
    <Comp
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Comp>
  );
}
