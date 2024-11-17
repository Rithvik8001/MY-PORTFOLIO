"use client";

import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { expoOutTransition } from "@/constants/animations";

const ScrollWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, [pathname]);

  return <motion.div>{children}</motion.div>;
};

export default ScrollWrapper;
