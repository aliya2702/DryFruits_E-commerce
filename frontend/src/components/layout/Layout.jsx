import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "../../context/ThemeContext";
import { CartProvider } from "../../context/CartContext";
import { ProgressBar, ScrollTopButton } from "../ui";

function LayoutContent({ children }) {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 text-stone-950 dark:text-stone-100 min-h-screen relative theme-transition">
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      {/* Global Scroll UI Elements */}
      <ProgressBar />
      <ScrollTopButton threshold={400} />

      <Footer />
    </div>
  );
}

function Layout({ children }) {
  return (
    <ThemeProvider>
      <CartProvider>
        <LayoutContent>{children}</LayoutContent>
      </CartProvider>
    </ThemeProvider>
  );
}

export default Layout;