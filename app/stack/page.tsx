"use client";

import { technologies, tools } from "@/constants/skills";
import Skill from "@/components/skills/skill";
import Card from "@/components/ui/card";
import { motion } from "framer-motion";
import { bounceTransition, fadeInScale } from "@/constants/animations";

const StackPage = () => {
  return (
    <div className="pt-4 px-4 flex flex-col gap-4 pb-20 sm:px-24 md:px-40 md:pt-12 lg:px-24 lg:py-24">
      <div className="w-full lg:max-w-[1000px] 3xl:max-w-[1200px] mx-auto flex flex-col gap-4">
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
          Stack
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
          Tools and technologies I love
        </motion.p>
        <motion.div
          variants={fadeInScale}
          initial="initial"
          animate="animate"
          transition={{
            ...bounceTransition,
            delay: 0.2,
          }}
        >
          <Card className="rounded-3xl">
            <h1 className="font-semibold sm:text-2xl">Technologies</h1>
            <section className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              {technologies.map((skill, index) => (
                <motion.div
                  variants={fadeInScale}
                  initial="initial"
                  animate="animate"
                  transition={{
                    ...bounceTransition,
                    delay: 0.4 + 0.1 + index * 0.1,
                  }}
                  key={skill.image.src}
                >
                  <Skill {...skill} />
                </motion.div>
              ))}
            </section>
          </Card>
        </motion.div>
        <motion.div
          variants={fadeInScale}
          initial="initial"
          animate="animate"
          transition={{
            ...bounceTransition,
            delay: 0.4,
          }}
        >
          <Card className="rounded-3xl">
            <h1 className="font-semibold sm:text-2xl">Tools</h1>
            <section className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              {tools.map((skill, index) => (
                <motion.div
                  variants={fadeInScale}
                  initial="initial"
                  animate="animate"
                  transition={{
                    ...bounceTransition,
                    delay: 0.6 + 0.1 + index * 0.1,
                  }}
                  key={skill.image.src}
                >
                  <Skill {...skill} />
                </motion.div>
              ))}
            </section>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default StackPage;
