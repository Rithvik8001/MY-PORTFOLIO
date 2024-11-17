"use client";

import { cn } from "@/utils/lib";
import { ArrowDownRight } from "lucide-react";
import NextLink from "next/link";
import { HTMLAttributes, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { colors } from "@/constants/colors";
import { ColorName } from "@/types";
import { useTheme } from "next-themes";

type LinkProps = {
  href: string;
  children?: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  color?: string;
};

const Link = ({ href, children, className, color }: LinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorScheme = colors[(color as ColorName) || ("malibu" as ColorName)];
  const { theme } = useTheme();

  return (
    <NextLink
      href={href}
      className={cn(
        "py-2 px-3 rounded-full border border-border bg-card flex items-center gap-2",
        className
      )}
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
      target="_blank"
    >
      {children}{" "}
      <motion.span
        animate={{
          rotate: isHovered ? -90 : 0,
        }}
        className="block"
      >
        <ArrowDownRight
          className="h-4 w-4 transition-colors"
          style={{
            color: isHovered
              ? theme === "light"
                ? colorScheme.foreground.DEFAULT
                : colorScheme.foreground.constantDark
              : "var(--foreground)",
          }}
        />
      </motion.span>
    </NextLink>
  );
};

export default Link;
