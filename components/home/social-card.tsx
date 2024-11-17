"use client";

import { Social } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "../ui/card";
import { cn } from "@/utils/lib";
import { useState } from "react";
import { colors } from "@/constants/colors";

type SocialCardProps = Social;

const AnimatedLink = motion.create(Link);

const SocialCard = ({ name, url, Icon, color }: SocialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorScheme = colors[color];

  return (
    <AnimatedLink
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.07,
      }}
      transition={{}}
      className="block transition-colors rounded-xl"
      style={{
        backgroundColor: isHovered ? colorScheme.DEFAULT : "transparent",
      }}
      href={url}
    >
      <Card className="relative group cursor-pointer rounded-xl bg-transparent aspect-square items-center justify-center">
        <Icon
          className={`h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 transition-all group-hover:scale-[0.8] group-hover:-translate-y-2`}
          style={{
            color: isHovered ? colorScheme.foreground.constantDark : "unset",
          }}
        />
        <h1
          className={`absolute bottom-0 transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 lg:group-hover:-translate-y-8`}
          style={{
            color: isHovered ? colorScheme.foreground.constantDark : "unset",
          }}
        >
          {name}
        </h1>
      </Card>
    </AnimatedLink>
  );
};

export default SocialCard;
