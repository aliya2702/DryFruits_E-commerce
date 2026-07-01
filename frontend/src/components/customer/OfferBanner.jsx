import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { OFFER_BANNERS } from "../../data/homeData";

function OfferBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const offer = OFFER_BANNERS[activeIndex];

  return (
    <section className="py-16 bg-stone-900 border-y border-amber-900/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Offer Selector Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {OFFER_BANNERS.map((o, i) => (
            <button
              key={o.id}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "bg-amber-500 text-stone-950 border-amber-500"
                  : "bg-transparent text-stone-400 border-stone-700 hover:border-amber-500/50"
              }`}
            >
              {o.tag}
            </button>
          ))}
        </div>

        {/* Active Offer Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-amber-900/20 bg-gradient-to-br ${offer.bgGradient} p-8 sm:p-12`}
          >
            {/* Text Side */}
            <div className="space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {offer.tag}
              </span>

              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-stone-100 leading-tight">
                  {offer.headline}
                </h2>
                <p className="text-amber-400 font-bold text-lg mt-1">{offer.subheadline}</p>
              </div>

              <p className="text-stone-400 text-sm max-w-md mx-auto lg:mx-0 leading-relaxed">
                {offer.description}
              </p>

              {offer.code && (
                <div className="inline-flex items-center gap-3 bg-stone-950/60 border border-amber-500/20 rounded-xl px-4 py-3">
                  <span className="text-stone-500 text-xs uppercase tracking-wider">Coupon Code:</span>
                  <span className="text-amber-400 font-black text-sm tracking-widest">{offer.code}</span>
                </div>
              )}

              <div className="pt-2">
                <Link
                  to={offer.href}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-stone-950 font-extrabold px-8 py-3.5 rounded-full shadow-lg shadow-amber-900/20 transition-all duration-300 hover:scale-105"
                >
                  <span>{offer.cta}</span>
                  <span>🎁</span>
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-amber-500/10 shadow-2xl shadow-amber-900/10">
                <img
                  src={offer.image}
                  alt={offer.headline}
                  className="w-full h-60 sm:h-72 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

export default OfferBanner;
