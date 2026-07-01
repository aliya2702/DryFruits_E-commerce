import React, { useEffect } from "react";
import {
  SplashScreen,
  HeroSection,
  CategoriesSection,
  BestSellersSection,
  WhyChooseUs,
  AboutSection,
  ReviewsSection,
  StoreLocationSection,
  ContactSection
} from "../../components/customer";

function Home() {
  // Handle scrolling to hash links (About, Contact) when entering the Home page
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <WhyChooseUs />
      <AboutSection />
      <ReviewsSection />
      <StoreLocationSection />
      <ContactSection />
    </div>
  );
}

export default Home;