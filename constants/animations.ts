export const bounceTransition = {
  type: "spring",
  duration: 1,
};

export const expoOutTransition = {
  ease: [0.16, 1, 0.3, 1],
  duration: 1,
};

export const fadeInScale = {
  initial: {
    opacity: 0,
    scale: 0.2,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};
