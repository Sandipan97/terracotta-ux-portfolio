
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export const phaseVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.6
    }
  }
};

export const arrowVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -90
  },
  show: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
      delay: 0.2
    }
  }
};

export const iconVariants = {
  rest: { 
    scale: 1,
    rotate: 0
  },
  hover: { 
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200
    }
  }
};
