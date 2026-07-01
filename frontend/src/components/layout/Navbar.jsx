import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../constants/navLinks";
import ThemeToggle from "../common/ThemeToggle";
import { useCart } from "../../context/CartContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 20;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-100/95 dark:bg-stone-950/95 backdrop-blur-md shadow-lg border-b border-stone-200/50 dark:border-amber-900/10 py-3"
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
            {NAV_LINKS.map((link) => {
              const isHash = link.path.includes('#');
              return isHash ? (
                <a
                  key={link.label}
                  href={link.path}
                  className="text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 font-semibold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 font-semibold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Controls: Cart, Profile, Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
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
            {NAV_LINKS.map((link) => {
              const isHash = link.path.includes('#');
              return isHash ? (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-stone-800 dark:text-stone-100 hover:text-amber-500 font-semibold py-2 transition-colors text-base"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-stone-800 dark:text-stone-100 hover:text-amber-500 font-semibold py-2 transition-colors text-base"
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-stone-200 dark:border-stone-850 flex items-center justify-between">
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