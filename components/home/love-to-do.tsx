"use client";

import { loveToDo } from "@/constants/love-to-do";
import Card from "../ui/card";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../ui/button";

const LoveToDo = () => {
  const [current, setCurrent] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [direction, setDirection] = useState("right");

  const handleChangeRight = () => {
    setDirection("right");

    if (current + 1 === loveToDo.length) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const handleChangeLeft = () => {
    setDirection("left");

    if (current === 0) {
      setCurrent(loveToDo.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    if (current >= 1) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }

    if (current === loveToDo.length - 1) {
      setShowRight(false);
    } else {
      setShowRight(true);
    }
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleChangeRight();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Card className="bg-background-blur h-full col-span-2 shadow-4xl rounded-3xl md:p-8 min-h-52 md:col-span-1">
      <h1 className="font-semibold text-2xl">Little things about me</h1>
      <AnimatePresence mode="wait">
        <motion.p
          className="text-foreground-muted"
          initial={{
            x: direction === "right" ? 10 : -10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: direction === "right" ? -10 : 10,
            opacity: 0,
          }}
          transition={{
            ease: [0.16, 1, 0.3, 1],
          }}
          key={loveToDo[current] + current}
        >
          {loveToDo[current]}
        </motion.p>
      </AnimatePresence>
      <div className="mt-auto flex justify-end gap-4">
        <AnimatePresence>
          {showLeft && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                onClick={handleChangeLeft}
                color="lavender"
                className="aspect-square w-max transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          onClick={handleChangeRight}
          color="rose"
          className="aspect-square w-max transition-all disabled:opacity-50"
          disabled={!showRight}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default LoveToDo;
