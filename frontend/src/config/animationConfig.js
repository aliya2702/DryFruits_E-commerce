/**
 * Standard animation variants and configuration for framer-motion.
 * Ensures consistent animation timing and styling across the app.
 */
export const animationConfig = {
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    scaleUp: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  },
};
