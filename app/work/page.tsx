"use client";

import { experiences } from "@/constants/experiences";
import Experience from "../../components/work/experience";
import { LayoutGroup, motion } from "framer-motion";
import { bounceTransition, fadeInScale } from "@/constants/animations";
import { useState } from "react";
import { Experience as ExperienceType } from "@/types";

const WorkPage = () => {
  const [toggledExperience, setToggledExperience] =
    useState<ExperienceType | null>(null);

  return (
    <div className="pt-4 px-4 flex flex-col gap-4 pb-20 sm:px-24 md:px-40 md:pt-12 lg:px-24 lg:py-24">
      <div className="lg:max-w-[1000px] 2xl:w-[1200px] 3xl:max-w-[1200px] mx-auto flex flex-col gap-4">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            ease: [0.16, 1, 0.3, 1],
            duration: 0.5,
          }}
          className="text-3xl font-semibold"
        >
          Experience
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            type: "tween",
            ease: [0.16, 1, 0.3, 1],
            duration: 0.5,
          }}
          className="text-foreground-muted lg:w-1/2"
        >
          I have had the privilege of working with some amazing companies and
          talented individuals. Here are some of the places where I have worked.
        </motion.p>
        <section className="flex flex-col gap-4">
          <LayoutGroup>
            {experiences.map((experience, index) => (
              <motion.div
                variants={fadeInScale}
                initial="initial"
                animate="animate"
                transition={{
                  ...bounceTransition,
                  delay: 0.2 + 0.1 + index * 0.1,
                }}
                key={experience.company + index}
              >
                <Experience
                  isToggled={experience.id === toggledExperience?.id}
                  setToggledExperience={setToggledExperience}
                  {...experience}
                />
              </motion.div>
            ))}
          </LayoutGroup>
        </section>
      </div>
    </div>
  );
};

export default WorkPage;
