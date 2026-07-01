import React from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { scrollToTop } from "../../utils/scrollToTop";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Reusable Scroll To Top Button.
 * Appears when the user scrolls down.
 *
 * @param {object} props
 * @param {number} [props.threshold=400] - Scroll position in px to show the button.
 * @param {string} [props.className]
 */
function ScrollTopButton({ threshold = 400, className = "" }) {
  const { scrollY } = useScrollPosition();

  return (
    <AnimatePresence>
      {scrollY > threshold && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => scrollToTop("smooth")}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer animate-glow-pulse ${className}`}
          title="Scroll to Top"
        >
          <span className="text-sm font-bold block transform -rotate-90">➔</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollTopButton;
