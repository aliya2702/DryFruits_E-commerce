import React from "react";
import { REVIEWS } from "../../data/homeData";
import { SectionTitle, Card, Rating } from "../../components/ui";

function ReviewsSection() {
  return (
    <section className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          title="Loved by Snackers"
          subtitle="Read stories from customers who snack healthy with Bhavani."
        />

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <Card
              key={review.id}
              hoverable
              className="flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                {/* Stars */}
                <Rating value={review.rating} />
                <p className="text-stone-300 text-xs sm:text-sm italic leading-relaxed">
                  "{review.review}"
                </p>
              </div>

              {/* Customer details */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-stone-850">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-stone-200 text-xs sm:text-sm">{review.name}</h4>
                  <p className="text-[10px] text-stone-500">{review.location} • Verified snacker</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ReviewsSection;
