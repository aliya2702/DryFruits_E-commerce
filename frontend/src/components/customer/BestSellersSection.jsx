import React from "react";
import { Link } from "react-router-dom";
import { BEST_SELLERS } from "../../data/homeData";
import { SectionTitle, ProductCard, Button } from "../../components/ui";

function BestSellersSection() {
  return (
    <section className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-end justify-between mb-12 gap-6">
          <SectionTitle
            title="Our Best Sellers"
            subtitle="Highly rated dry fruits and gift sets loved by our community."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Button variant="outline" href="/shop" rightIcon={<span className="text-lg leading-none">→</span>}>
            View All Products
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEST_SELLERS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BestSellersSection;


