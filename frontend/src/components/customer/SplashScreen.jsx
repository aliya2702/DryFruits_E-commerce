import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ANIMATION_DURATIONS } from "../../constants/theme";

function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, ANIMATION_DURATIONS.splashScreen * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: ANIMATION_DURATIONS.splashFade, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-stone-950 flex flex-col items-center justify-center text-center overflow-hidden px-4"
        >
          {/* Subtle glowing ambient light behind the logo */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-amber-500/10 blur-[80px]" />

          {/* Logo / Emoji icon container */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2,
            }}
            className="relative bg-gradient-to-br from-amber-800 to-amber-950 p-6 rounded-3xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 mb-6"
          >
            <span className="text-6xl sm:text-7xl block">✨</span>
          </motion.div>

          {/* Brand Name Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 bg-clip-text text-transparent tracking-wide"
          >
            Bhavani
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-stone-400 text-sm mt-3 uppercase tracking-[0.25em]"
          >
            Dry Fruits & Chocolates
          </motion.p>

          {/* Progress bar line */}
          <div className="w-48 h-1 bg-stone-900 rounded-full mt-10 overflow-hidden relative border border-stone-850">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
