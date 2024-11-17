"use client";

import { navlinks } from "@/constants/nav-links";
import NavLink from "./nav-link";
import ThemeBtn from "./theme-btn";
import { motion } from "framer-motion";
import { expoOutTransition } from "@/constants/animations";

const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
      exit={{ opacity: 0 }}
      transition={expoOutTransition}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-10 rounded-full px-6 flex items-center gap-6 bg-background-blur shadow-xl backdrop-filter backdrop-blur-md border border-border"
    >
      {navlinks.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
      <ThemeBtn />
    </motion.nav>
  );
};

export default Nav;
