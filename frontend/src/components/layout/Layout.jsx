import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "../../context/ThemeContext";
import { CartProvider } from "../../context/CartContext";
import { ProgressBar, ScrollTopButton } from "../ui";
import SplashScreen from "../customer/SplashScreen";

function LayoutContent() {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 text-stone-950 dark:text-stone-100 min-h-screen relative transition-colors duration-300">
      <SplashScreen />
      <ProgressBar />
      <Navbar />

      <main className="min-h-screen pt-20">
        {/* Outlet renders the matched child route */}
        <Outlet />
      </main>

      <ScrollTopButton threshold={400} />
      <Footer />
    </div>
  );
}

function Layout() {
  return (
    <ThemeProvider>
      <CartProvider>
        <LayoutContent />
      </CartProvider>
    </ThemeProvider>
  );
}

export default Layout;