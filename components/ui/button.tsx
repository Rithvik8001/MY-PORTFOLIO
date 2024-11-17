"use client";

import { cn } from "@/utils/lib";
import { HTMLAttributes, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { colors } from "@/constants/colors";
import { ColorName } from "@/types";
import { useTheme } from "next-themes";

type ButtonProps = {
  children?: ReactNode;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  onClick?: HTMLAttributes<HTMLButtonElement>["onClick"];
  color?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  className,
  color,
  onClick,
  disabled,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorScheme = colors[(color as ColorName) || ("malibu" as ColorName)];
  const { theme } = useTheme();

  return (
    <button
      className={cn(
        "py-2 px-3 rounded-full border border-border flex items-center text-center gap-2 bg-transparent disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: color
          ? isHovered
            ? theme === "light"
              ? colorScheme[200]
              : colorScheme.DEFAULT
            : "transparent"
          : isHovered
          ? theme === "light"
            ? colorScheme[200]
            : colorScheme.DEFAULT
          : "transparent",
        color: isHovered
          ? theme === "light"
            ? colorScheme.foreground.DEFAULT
            : colorScheme.foreground.constantDark
          : "var(--foreground)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
