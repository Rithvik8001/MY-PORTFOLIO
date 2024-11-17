"use client";

import Card from "@/components/ui/card";
import { Experience as ExperienceType } from "@/types";
import { ArrowDownRight } from "lucide-react";
import { useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "framer-motion";
import { colors } from "@/constants/colors";
import { useTheme } from "next-themes";

type ExperienceProps = ExperienceType & {
  setToggledExperience: (experience: ExperienceType | null) => void;
  isToggled: boolean;
};

const Experience = ({
  company,
  descriptions,
  from,
  to,
  role,
  color,
  isToggled,
  setToggledExperience,
  id,
}: ExperienceProps) => {
  const { theme } = useTheme();
  const colorScheme = colors[color];

  return (
    <MotionConfig transition={{}}>
      <LayoutGroup>
        <motion.div
          layout
          animate={{
            backgroundColor: isToggled
              ? colorScheme.DEFAULT
              : "var(--background-secondary)",
          }}
          whileHover={{
            backgroundColor: !isToggled
              ? theme === "light"
                ? colorScheme[200]
                : colorScheme[900]
              : colorScheme.DEFAULT,
            scale: 1.05,
            boxShadow: "0px 0px 20px 5px rgba(16, 33, 43, 0.09)",
          }}
          className="rounded-xl border border-border"
          transition={{}}
        >
          <Card
            onClick={() => {
              isToggled
                ? setToggledExperience(null)
                : setToggledExperience({
                    company,
                    descriptions,
                    from,
                    to,
                    role,
                    color,
                    id,
                  });
            }}
            className="cursor-pointer bg-transparent border-none"
          >
            <motion.div
              transition={{}}
              className="flex flex-col lg:gap-2"
              layout
            >
              <h1
                className="font-semibold flex items-center gap-2 sm:text-xl"
                style={{
                  color: isToggled
                    ? colorScheme.foreground.constantDark
                    : "var(--foreground)",
                }}
              >
                {role}{" "}
                <motion.span
                  animate={{
                    rotate: isToggled ? -90 : 0,
                  }}
                  className="block"
                  transition={{}}
                >
                  <ArrowDownRight
                    className="h-4 w-4 transition-colors"
                    style={{
                      color: isToggled
                        ? colorScheme.foreground.constantDark
                        : "var(--foreground)",
                    }}
                  />
                </motion.span>
              </h1>
              <div>
                <p
                  style={{
                    color: isToggled
                      ? colorScheme.foreground.constantDark
                      : "var(--foreground)",
                  }}
                  className="text-foreground-muted"
                >
                  {from} - {to}
                </p>
                <p
                  style={{
                    color: isToggled
                      ? colorScheme.foreground.constantDark
                      : "var(--foreground)",
                  }}
                  className="text-foreground-muted"
                >
                  {company}
                </p>
              </div>
            </motion.div>
            <AnimatePresence>
              {isToggled && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                    },
                  }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  {descriptions.map((description, index) => (
                    <li
                      style={{
                        color: isToggled
                          ? colorScheme.foreground.constantDark
                          : "var(--foreground)",
                      }}
                      key={description + index}
                    >
                      {description}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </LayoutGroup>
    </MotionConfig>
  );
};

export default Experience;
