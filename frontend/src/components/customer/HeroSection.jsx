import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HERO_DATA } from "../../data/homeData";
import { ANIMATION_DURATIONS } from "../../constants/theme";

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-stone-950 flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.heroEntrance, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <span className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <span>{HERO_DATA.badge}</span>
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-stone-100 leading-tight">
              {HERO_DATA.headline}{" "}
              <span className="gradient-text">
                {HERO_DATA.headlineAccent}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-stone-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {HERO_DATA.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to={HERO_DATA.cta.primary.href}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-stone-950 font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-900/30 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                {HERO_DATA.cta.primary.label} 🛒
              </Link>
              <Link
                to={HERO_DATA.cta.secondary.href}
                className="w-full sm:w-auto border border-stone-800 hover:border-amber-500/50 hover:bg-stone-900/30 text-stone-300 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-center"
              >
                {HERO_DATA.cta.secondary.label}
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-800/60">
              {HERO_DATA.stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-amber-400 font-black text-xl sm:text-2xl">{stat.value}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center items-center relative"
          >
            {/* Decorative circles */}
            <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-amber-500/10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-dashed border-amber-500/5 animate-[spin_40s_linear_infinite_reverse]" />

            {/* Hero Image Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-amber-500/15 shadow-2xl shadow-amber-900/20 max-w-sm w-full">
              <img
                src={HERO_DATA.heroImage}
                alt="Premium Dry Fruits Hamper"
                className="w-full h-72 sm:h-96 object-cover"
                loading="eager"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 glass-card p-3">
                <p className="text-amber-400 font-bold text-sm">🎁 Festive Gift Boxes</p>
                <p className="text-stone-400 text-xs mt-0.5">Customized hampers for every occasion</p>
              </div>
            </div>

            {/* Floating emojis */}
            <motion.span
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-8 left-8 text-4xl hidden sm:inline"
            >
              🌰
            </motion.span>
            <motion.span
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4.0, ease: "easeInOut" }}
              className="absolute bottom-8 right-8 text-4xl hidden sm:inline"
            >
              🍫
            </motion.span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
