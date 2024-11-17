"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import FrozenRoute from "./frozen-route";
import { bounceTransition } from "@/constants/animations";

const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FrozenRoute>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0, filter: "blur(15px)", y: 25 }}
            transition={{
              duration: 0.2,
            }}
          >
            <MotionConfig transition={bounceTransition}>
              {children}
            </MotionConfig>
          </motion.div>
        </FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
