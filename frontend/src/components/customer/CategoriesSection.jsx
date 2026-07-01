import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, CATEGORY_IMAGES } from "../../data/homeData";
import { SectionTitle } from "../../components/ui";

function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionTitle
          title="Browse by Category"
          subtitle="Handpicked premium dry fruits, nuts, berries, and gourmet chocolates sorted just for your snacking convenience."
        />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-stone-850 hover:border-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5"
            >
              {/* Background product image */}
              <div className="aspect-square relative">
                <img
                  src={CATEGORY_IMAGES[category.slug]}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />
                {/* Emoji */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-stone-950/60 backdrop-blur-sm flex items-center justify-center text-xl border border-stone-800/50">
                  {category.emoji}
                </div>
              </div>

              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-stone-100 group-hover:text-amber-400 transition-colors text-sm sm:text-base">
                  {category.name}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">{category.description}</p>
                <span className="text-xs text-amber-500 group-hover:text-amber-400 font-semibold mt-2 inline-flex items-center space-x-1">
                  <span>Explore</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoriesSection;


