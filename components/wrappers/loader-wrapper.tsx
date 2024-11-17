"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Loader from "../ui/loader";
import { expoOutTransition } from "@/constants/animations";
import ScrollWrapper from "./scroll-wrapper";

const LoaderWrapper = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2250);

    return () => clearTimeout(timer);
  });

  return (
    <AnimatePresence mode="popLayout">
      {!isLoaded ? (
        <motion.div
          className="fixed top-0 left-0 w-full min-h-screen z-20 bg-foreground will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: "100%" }}
          transition={{
            ...expoOutTransition,
            duration: 1,
          }}
          key="loader"
        >
          <Loader />
        </motion.div>
      ) : (
        <div key="page">{children}</div>
      )}
    </AnimatePresence>
  );
};

export default LoaderWrapper;
