"use client";

import { colors } from "@/constants/colors";
import { ColorName } from "@/types";
import { cn } from "@/utils/lib";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

type TextBadgeProps = {
  children?: ReactNode;
  color: ColorName;
  className?: string;
};

const TextBadge = ({ children, color, className }: TextBadgeProps) => {
  const { theme } = useTheme() || "light";
  const colorScheme = colors[color];

  return (
    <span
      className={cn("px-2 rounded-md", className)}
      style={{
        backgroundColor:
          theme === "light" ? colorScheme[200] : colorScheme[600],
        color: colorScheme.foreground.darker,
      }}
    >
      {children}
    </span>
  );
};

export default TextBadge;
