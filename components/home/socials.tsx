"use client";

import Card from "@/components/ui/card";
import { socials } from "@/constants/socials";
import SocialCard from "./social-card";
import { motion } from "framer-motion";
import { bounceTransition, fadeInScale } from "@/constants/animations";
import Link from "../ui/link";

const Socials = () => {
  return (
    <Card className="rounded-3xl shadow-4xl bg-background-blur col-span-2 md:p-8 lg:px-16">
      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        {socials.map((social, index) => (
          <motion.div
            key={social.url}
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            transition={{
              ...bounceTransition,
              delay: 0.6 + 0.2 + index * 0.2,
            }}
          >
            <SocialCard {...social} />
          </motion.div>
        ))}
      </div>
      <Link color="biloba" href="https://drive.google.com/file/d/179PZm5uwmOrpxTirYHINZi5cL5FHD7rS/view?usp=sharing" className="w-max ml-auto">Resume</Link>
    </Card>
  );
};

export default Socials;
