"use client";

import { expoOutTransition } from "@/constants/animations";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { Emoji } from "react-apple-emojis";

const greetings = [
  "Hello!",
  "Namaste!",
  "Hola!",
  "Bonjour!",
  "Guten Tag!",
  "Ciao!",
];

const Loader = () => {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const [isMounted, setIsMounted] = useState(false);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldExit(true);
    }, 1250);

    return () => clearTimeout(timer);
  });

  if (!isMounted) return null;

  return (
    <MotionConfig transition={expoOutTransition}>
      <div className="relative w-full h-screen flex flex-col justify-center items-center p-8">
        <h1 className="w-full h-full flex-1 flex justify-center items-center py-2">
          <span className="block w-full">
            <AnimatePresence>
              {!shouldExit && (
                <motion.span
                  initial={{ y: "-100%", opacity: 0, filter: "blur(15px)" }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                      ...expoOutTransition,
                      delay: 0.5,
                    },
                  }}
                  exit={{
                    y: "100%",
                    opacity: 0,
                    filter: "blur(15px)",
                    rotateX: 25,
                    transition: {
                      ...expoOutTransition,
                      ease: [0.7, 0, 0.84, 0],
                    },
                  }}
                  className="block text-center text-background text-4xl md:text-5xl 2xl:text-6xl font-semibold"
                >
                  {greeting}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </h1>
        <p className="mb-16">
          <AnimatePresence>
            {!shouldExit && (
              <motion.span
                initial={{ y: "-100%", opacity: 0, filter: "blur(15px)" }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    ...expoOutTransition,
                    delay: 0.5,
                  },
                }}
                exit={{
                  y: "100%",
                  opacity: 0,
                  filter: "blur(15px)",
                  rotateX: 25,
                  transition: {
                    ...expoOutTransition,
                    ease: [0.7, 0, 0.84, 0],
                  },
                }}
                className="flex justify-center underline underline-offset-4 decoration-wavy decoration-background items-center gap-2 text-center text-background"
              >
                Welcome to my portfolio{" "}
                <span className="inline-flex justify-center items-center">
                  <Emoji
                    className="inline"
                    name="folded-hands"
                    height={16}
                    width={16}
                  />
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </p>
      </div>
    </MotionConfig>
  );
};

export default Loader;
