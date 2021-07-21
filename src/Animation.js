export const pageAnimation = {
  hidden: {
    opacity: 0,
    // down
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  //   while leaving
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};