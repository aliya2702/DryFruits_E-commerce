import React from "react";
import { Link } from "react-router-dom";
import { STORE_INFO, SOCIAL_LINKS } from "../../data/homeData";

function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 text-stone-800 dark:text-stone-100 border-t border-stone-200 dark:border-amber-900/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">✨</span>
              <span className="font-extrabold text-2xl bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-200 bg-clip-text text-transparent">
                Bhavani
              </span>
            </Link>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
              Premium Dry Fruits & Artisan Chocolates crafted for wellness and premium taste. Bringing the best quality to your doorstep since 2026.
            </p>
            <div className="flex space-x-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-stone-200 dark:bg-stone-900 hover:bg-amber-600 dark:hover:bg-amber-500 text-stone-700 dark:text-stone-300 hover:text-white dark:hover:text-stone-950 transition-colors w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
              <li>
                <Link to="/" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Shop Products</Link>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-4 text-base">Dry Fruits</h4>
            <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
              <li>
                <Link to="/shop?category=almonds" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Almonds (Badam)</Link>
              </li>
              <li>
                <Link to="/shop?category=cashews" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Cashews (Kaju)</Link>
              </li>
              <li>
                <Link to="/shop?category=pistachios" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Pistachios (Pista)</Link>
              </li>
              <li>
                <Link to="/shop?category=walnuts" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Walnuts (Akhrot)</Link>
              </li>
            </ul>
          </div>

          {/* Store Contacts */}
          <div>
            <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-4 text-base">Store Contact</h4>
            <ul className="space-y-3 text-sm text-stone-500 dark:text-stone-400">
              <li className="flex items-start space-x-2">
                <span className="text-amber-600 dark:text-amber-500 mt-0.5">📍</span>
                <span>{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-amber-600 dark:text-amber-500">📞</span>
                <span>{STORE_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-amber-600 dark:text-amber-500">✉️</span>
                <span>{STORE_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 dark:border-stone-900 pt-8 text-center text-stone-400 dark:text-stone-500 text-xs">
          <p>© {new Date().getFullYear()} Bhavani Dryfruits and Chocolates. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;