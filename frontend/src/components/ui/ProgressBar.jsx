import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Reusable animated progress bar indicating page scroll depth.
 *
 * @param {object} props
 * @param {string} [props.color='bg-amber-500'] - Tailwind background color class.
 * @param {string} [props.className]
 */
function ProgressBar({ color = "bg-amber-500", className = "" }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-[9999] origin-left ${color} ${className}`}
      style={{ scaleX }}
    />
  );
}

export default ProgressBar;
