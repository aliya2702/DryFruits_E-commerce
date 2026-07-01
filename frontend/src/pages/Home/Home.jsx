import React from "react";
import {
  SplashScreen,
  HeroSection,
  CategoriesSection,
  BestSellersSection,
  OfferBanner,
  WhyChooseUs,
  AboutSection,
  ReviewsSection,
  StoreLocationSection,
  ContactSection
} from "../../components/customer";

function Home() {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen">
      <SplashScreen />
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <OfferBanner />
      <WhyChooseUs />
      <AboutSection />
      <ReviewsSection />
      <StoreLocationSection />
      <ContactSection />
    </div>
  );
}

export default Home;