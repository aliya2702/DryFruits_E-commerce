import React from "react";
import { SectionTitle, Card } from "../../components/ui";

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-stone-100 dark:bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Element / Box Hamper Mockup */}
          <div className="flex justify-center relative order-last lg:order-first">
            <div className="absolute w-80 h-80 rounded-full bg-amber-500/5 blur-[80px]" />
            <div className="relative bg-gradient-to-br from-stone-950 to-amber-950/30 p-8 sm:p-12 rounded-[2.5rem] border border-amber-500/10 shadow-2xl max-w-sm text-center">
              <div className="text-9xl mb-4">🌰</div>
              <h4 className="text-xl font-bold text-amber-400">Purity & Trust</h4>
              <p className="text-stone-500 dark:text-stone-400 text-xs mt-2">
                Every package is seal-locked under high hygiene conditions to lock in fresh crunchiness.
              </p>
            </div>
          </div>

          {/* Text Story */}
          <div className="space-y-6">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block">
              ✦ Our Heritage
            </span>
            <SectionTitle
              title="The Journey of Bhavani Dryfruits"
              align="left"
              className="mb-6 max-w-none"
            />
            <p className="text-stone-500 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              Founded with a simple mission: to deliver premium grade dry fruits and customized premium chocolates directly from verified organic farms to sweet lovers. We believe snacking should be both satisfying and healthy.
            </p>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
              Every almond, cashew, pistachio, and chocolate box is hand-sorted, graded, and seal-packed. We supply home kitchens, wedding functions, and corporate events across Secunderabad and Hyderabad.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <Card padding="sm">
                <div className="text-2xl font-black text-amber-400">100%</div>
                <div className="text-[10px] text-stone-500 mt-1 uppercase font-semibold">Natural</div>
              </Card>
              <Card padding="sm">
                <div className="text-2xl font-black text-amber-400">50k+</div>
                <div className="text-[10px] text-stone-500 mt-1 uppercase font-semibold">Customers</div>
              </Card>
              <Card padding="sm">
                <div className="text-2xl font-black text-amber-400">10+</div>
                <div className="text-[10px] text-stone-500 mt-1 uppercase font-semibold">Varieties</div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
