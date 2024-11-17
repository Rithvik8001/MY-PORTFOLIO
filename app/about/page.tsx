"use client";

import Card from "@/components/ui/card";
import { bounceTransition, fadeInScale } from "@/constants/animations";
import { MotionConfig, motion } from "framer-motion";

const AboutPage = () => {
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
            About me
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
            Some people call me a developer, some call me a designer, and some
            call me a football fanatic. But I like to call myself a problem
            solver!
          </motion.p>
          <div className="grid gap-4 lg:grid-cols-2">
            <motion.div
              variants={fadeInScale}
              initial="initial"
              animate="animate"
              transition={{
                ...bounceTransition,
                delay: 0.2,
              }}
            >
              <Card className="lg:rounded-3xl">
                <h1 className="font-semibold sm:text-2xl">More about me</h1>
                <p className="text-foreground-muted">
                  Hi, this is Rithvik. I am a Computer Science graduate and a
                  self-taught web developer specializing in creating web
                  applications. I leverage my technical expertise to solve
                  complex problems and would love the opportunity to showcase
                  and enhance my skills.
                </p>
                <p className="text-foreground-muted">
                  My journey began with the basics of HTML, CSS, and JavaScript,
                  which laid a strong foundation for my frontend development
                  skills. Over time, I have expanded my expertise to include
                  modern frameworks and libraries such as React. I am also
                  currently learning Next.js and Tailwind CSS.
                </p>
                <p className="text-foreground-muted">
                  When I'm not coding, I love to watch football ⚽️. You could
                  call me a football fanatic—I started watching this beautiful
                  sport when I was 16 years old, and my favorite club is the
                  biggest in England, Manchester United!
                </p>
                <p className="text-foreground-muted">
                  My goal is to leverage my skills and knowledge to create
                  impactful web applications that solve real-world problems. I
                  am excited about opportunities in frontend development and
                  look forward to collaborating with like-minded professionals
                  to build innovative solutions.
                </p>
              </Card>
            </motion.div>
            <motion.div
              variants={fadeInScale}
              initial="initial"
              animate="animate"
              transition={{
                ...bounceTransition,
                delay: 0.3,
              }}
            >
              <Card className="lg:rounded-3xl h-full">
                <h1 className="font-semibold sm:text-2xl">Education</h1>
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.2,
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.4,
                  }}
                  className="h-full"
                >
                  <Card className="h-full bg-transparent">
                    <h1 className="font-semibold">
                      Masters in Computer Science
                    </h1>
                    <div>
                      <p className="text-foreground-muted">
                        Aug 2022 - Dec 2023
                      </p>
                      <p className="text-foreground-muted">
                        Wichita State University
                      </p>
                      <p className="text-foreground-muted">Cgpa: 3.9 / 4.0</p>
                    </div>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.2,
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="h-full"
                >
                  <Card className="h-full bg-transparent">
                    <h1 className="font-semibold">B.Tech Computer Science</h1>
                    <div>
                      <p className="text-foreground-muted">
                        June 2017 - May 2021
                      </p>
                      <p className="text-foreground-muted">
                        Sastra Deemed to be University
                      </p>
                      <p className="text-foreground-muted">Cgpa: 7.0</p>
                    </div>
                  </Card>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default AboutPage;
