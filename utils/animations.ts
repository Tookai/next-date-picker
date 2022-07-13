export const slide = {
  initial: {
    x: "-100vw",
    transition: { duration: 0.3 },
  },
  animate: {
    x: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
  exit: {
    x: "100vw",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const fade = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeIn" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};
