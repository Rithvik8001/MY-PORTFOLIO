"use client";

import Project from "@/components/projects/project";
import { bounceTransition, fadeInScale } from "@/constants/animations";
import { projects } from "@/constants/projects";
import { MotionConfig, motion } from "framer-motion";
import Link from "@/components/ui/link";

const ProjectsPage = () => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        type: "spring",
      }}
    >
      <div className="pt-4 px-4 flex flex-col gap-4 pb-20 sm:px-24 md:px-40 md:pt-12 lg:px-24 lg:py-24">
        <div className="lg:max-w-[1000px] 3xl:max-w-[1200px] mx-auto flex flex-col gap-4">
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
            Projects
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
            Here are some of the projects I have worked on!
          </motion.p>
          <section className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <motion.div
                variants={fadeInScale}
                initial="initial"
                animate="animate"
                transition={{
                  ...bounceTransition,
                  delay: 0.2 + 0.1 + index * 0.1,
                }}
                key={project.url}
              >
                <Project {...project} />
              </motion.div>
            ))}
            <motion.div
              variants={fadeInScale}
              initial="initial"
              animate="animate"
              transition={{
                ...bounceTransition,
                delay: 0.2 + 0.1 + projects.length * 0.1,
              }}
              className="ml-auto"
            >
              <Link
                href="https://github.com/Rithvik8001"
                className="w-max"
                color="biloba"
              >
                View all projects on GitHub
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </MotionConfig>
  );
};

export default ProjectsPage;
