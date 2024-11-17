"use client";

import Card from "@/components/ui/card";
import memoji from "@/assets/memoji-working.png";
import memojiUnavailable from "@/assets/memoji-unavailable.png";
import Image from "next/image";
import { cn } from "@/utils/lib";
import { motion } from "framer-motion";
import { bounceTransition, fadeInScale } from "@/constants/animations";

const Availability = () => {
  let available = true;

  return (
    <Card className="h-full rounded-3xl row-span-2 p-10 shadow-4xl bg-background-blur items-center justify-center sm:p-12 md:p-14 xl:p-24 2xl:p-32">
      <motion.div
        variants={fadeInScale}
        transition={{
          delay: 0.9,
        }}
        className="relative w-full aspect-square flex justify-center items-center"
      >
        <Image
          className="aspect-square"
          fill
          src={available ? memoji.src : memojiUnavailable.src}
          placeholder="blur"
          blurDataURL={
            available ? memoji.blurDataURL : memojiUnavailable.blurDataURL
          }
          alt="memoji"
        />
        <svg
          className="absolute inset-0 h-full w-full will-change-transform animate-spin-slow"
          style={{
            transformOrigin: "center center 0px",
          }}
          viewBox="0 0 100 100"
          overflow="visible"
        >
          <path
            id="curve-wnxkz4"
            d="M 0 50 A 50 50 0 0 1 100 50 A 50 50 0 0 1 0 50"
            strokeWidth="none"
            fill="transparent"
            style={{
              transformOrigin: "center center 0px",
            }}
          ></path>
          <text
            style={{
              transformOrigin: "center center 0px",
            }}
            className={cn(
              "scale-[1.2] text-foreground-muted text-[10px] fill-foreground-muted lg:text-[6px] ",
              available
                ? "tracking-[0.2em] lg:tracking-[0.7em]"
                : "tracking-[0.115em] lg:tracking-[0.57em]"
            )}
          >
            <textPath
              href="#curve-wnxkz4"
              startOffset="0"
              dominantBaseline="Central"
            >
              {available
                ? "AVAILABLE FOR WORK - AVAILABLE FOR WORK -"
                : "UNAVAILABLE FOR WORK - UNAVAILABLE FOR WORK -"}
            </textPath>
          </text>
        </svg>
      </motion.div>
    </Card>
  );
};

export default Availability;
