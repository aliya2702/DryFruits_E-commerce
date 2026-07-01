import React from "react";
import { WHY_CHOOSE_US } from "../../data/homeData";
import { SectionTitle, Card } from "../../components/ui";

function WhyChooseUs() {
  return (
    <section className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          title="Why Choose Bhavani?"
          subtitle="We are committed to health, freshness, and quality packaging standard."
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <Card
              key={item.id}
              hoverable
              padding="sm"
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-stone-950 group-hover:bg-amber-500/10 flex items-center justify-center text-2xl transition-colors duration-300">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-stone-200 text-base group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
