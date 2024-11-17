"use client";

import Home from "@/components/home/home";
import LatestUpdates from "@/components/home/latest-updates";
import Availability from "@/components/home/availability";
import Socials from "@/components/home/socials";
import LoveToDo from "@/components/home/love-to-do";
import CTA from "@/components/home/cta";
import GithubContributions from "@/components/home/github-contributions";
import { motion } from "framer-motion";
import { bounceTransition, fadeInScale } from "@/constants/animations";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen home p-4 pb-20 sm:pt-12 sm:px-24 md:px-40 lg:px-52 lg:py-24 xl:px-64 2xl:px-96 3xl:px-[30rem]"
    >
      <div className="flex flex-col gap-4 lg:max-w-[600px] mx-auto xl:max-w-[1000px] 3xl:max-w-[1200px]">
        <Home />
        <section className="grid grid-cols-2 gap-4">
          <motion.div
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            className="will-change-transform"
            transition={{
              ...bounceTransition,
              delay: 0.4,
            }}
          >
            <LatestUpdates />
          </motion.div>
          <motion.div
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            className="row-span-1 xl:row-span-2 h-full will-change-transform"
            transition={{
              ...bounceTransition,
              delay: 0.5,
            }}
          >
            <Availability />
          </motion.div>
          <motion.div
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            transition={{
              ...bounceTransition,
              delay: 0.6,
            }}
            className="h-full hidden xl:block will-change-transform"
          >
            <GithubContributions />
          </motion.div>
          <motion.div
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            transition={{
              ...bounceTransition,
              delay: 0.7,
            }}
            className="col-span-2 will-change-transform"
          >
            <Socials />
          </motion.div>
          <motion.div
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            transition={{
              ...bounceTransition,
              delay: 0.8,
            }}
            className="h-full block col-span-2 xl:hidden will-change-transform"
          >
            <GithubContributions />
          </motion.div>
          <motion.div
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            transition={{
              ...bounceTransition,
              delay: 0.9,
            }}
            className="col-span-2 md:col-span-1 will-change-transform"
          >
            <LoveToDo />
          </motion.div>
          <motion.div
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            transition={{
              ...bounceTransition,
              delay: 1,
            }}
            className="col-span-2 md:col-span-1 will-change-transform"
          >
            <CTA />
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default HomePage;
