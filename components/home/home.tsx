"use client";

import Image from "next/image";
import memoji from "@/assets/memoji.png";
import TextBadge from "../ui/text-badge";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { expoOutTransition, fadeInScale } from "@/constants/animations";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <motion.section
      variants={fadeInScale}
      initial="initial"
      animate="animate"
      className="flex justify-center items-center"
    >
      <div className="flex flex-col gap-8 p-8 rounded-3xl bg-background-blur shadow-4xl border border-border overflow-x-hidden">
        <div>
          <motion.div
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            transition={{
              delay: 0.4,
            }}
            className="w-32 rounded-full overflow-hidden"
          >
            <Image
              src={memoji}
              alt="Memoji"
              placeholder="blur"
              blurDataURL={memoji.blurDataURL}
              className="aspect-square h-32 w-32"
            />
          </motion.div>
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ...expoOutTransition,
            delay: 0.4,
            duration: 0.5,
          }}
          className="text-3xl font-semibold leading-[1.4] lg:text-5xl lg:leading-[1.3]"
        >
          Yo, I'm <TextBadge color="malibu">Rithvik!</TextBadge> Passionate{" "}
          <TextBadge color="biloba">Frontend Developer</TextBadge>, Who has an{" "}
          <TextBadge color="lavender">eye for design</TextBadge> and a{" "}
          <TextBadge color="green">mind for development.</TextBadge> I love
          building things and helping people.
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default Home;
