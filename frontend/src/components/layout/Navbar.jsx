import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../constants/navLinks";
import ThemeToggle from "../common/ThemeToggle";
import { useCart } from "../../context/CartContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const SEARCH_PLACEHOLDERS = [
  "Search premium badam...",
  "Search whole cashews...",
  "Search gourmet dark chocolates...",
  "Search healthy mix hampers...",
  "Search organic dried figs...",
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 20;

  // Rotate search placeholders every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % SEARCH_PLACEHOLDERS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-100/90 dark:bg-stone-950/90 backdrop-blur-md shadow-lg border-b border-stone-200/50 dark:border-amber-900/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <span className="text-2xl">✨</span>
            <span className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-200 bg-clip-text text-transparent">
              Bhavani
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 shrink-0">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 font-semibold transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search bar with Animated Placeholder */}
          <div className="hidden sm:flex items-center relative flex-1 max-w-md mx-4">
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full bg-stone-200/60 dark:bg-stone-900/60 border border-stone-300 dark:border-stone-855 rounded-full py-2 pl-4 pr-10 text-xs sm:text-sm text-stone-800 dark:text-stone-100 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {/* Animated placeholder when empty */}
            {searchVal === "" && (
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs sm:text-sm text-stone-500 dark:text-stone-400 overflow-hidden h-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={placeholderIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {SEARCH_PLACEHOLDERS[placeholderIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
            <span className="absolute right-3.5 text-stone-400">🔍</span>
          </div>

          {/* Controls: Wishlist, Cart with badges, Profile, Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <button
              onClick={() => navigate("/wishlist")}
              className="text-stone-700 dark:text-stone-300 hover:text-amber-500 transition-colors relative p-1.5"
            >
              <span className="text-xl">❤️</span>
              <span className="absolute -top-0.5 -right-0.5 bg-amber-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            
            <button
              onClick={() => navigate("/cart")}
              className="text-stone-700 dark:text-stone-300 hover:text-amber-500 transition-colors relative p-1.5"
            >
              <span className="text-xl">🛒</span>
              {getCartCount() > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>


            <button
              onClick={() => navigate("/profile")}
              className="text-stone-700 dark:text-stone-300 hover:text-amber-500 transition-colors p-1.5"
              title="Profile"
            >
              <span className="text-xl">👤</span>
            </button>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3 shrink-0">
            <ThemeToggle />
            <button
              onClick={() => navigate("/cart")}
              className="text-stone-700 dark:text-stone-300 hover:text-amber-500 transition-colors relative p-1"
            >
              <span className="text-xl">🛒</span>
              {getCartCount() > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-600 text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 dark:text-stone-300 hover:text-amber-500 focus:outline-none"
            >
              <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-stone-100/95 dark:bg-stone-950/95 border-b border-stone-200 dark:border-stone-850 absolute top-full left-0 w-full px-4 py-6 space-y-4 shadow-xl z-50"
          >
            {/* Search Input for Mobile */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-stone-200/60 dark:bg-stone-900/60 border border-stone-300 dark:border-stone-855 rounded-full py-2 pl-4 pr-10 text-sm text-stone-800 dark:text-stone-100"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400">🔍</span>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-stone-800 dark:text-stone-100 hover:text-amber-500 font-semibold py-2 transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-stone-200 dark:border-stone-850 flex items-center justify-between">
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/wishlist");
                }}
                className="text-stone-800 dark:text-stone-100 flex items-center space-x-2"
              >
                <span>❤️</span>
                <span>Wishlist</span>
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/profile");
                }}
                className="text-stone-800 dark:text-stone-100 flex items-center space-x-2"
              >
                <span>👤</span>
                <span>Profile</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;