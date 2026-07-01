import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import Button from '../common/Button';

export default function ProductCard({ product }) {
  const { id, name, price, originalPrice, unit, rating, reviews, image, tag, inStock } = product;

  return (
    <div className="group relative bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/60 dark:border-stone-800/60 overflow-hidden hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 flex flex-col h-full">
      
      {/* Product Image Wrapper */}
      <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-950">
        <Link to={`/shop/${id}`} className="block h-full w-full">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Custom Tag Badge */}
        {tag && (
          <span className="absolute top-3 left-3 bg-amber-600/90 dark:bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {tag}
          </span>
        )}

        {/* Out of Stock Overlay */}
        {!inStock && (
          <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-stone-900/90 text-stone-200 text-xs font-bold px-4 py-2 rounded-xl tracking-wider uppercase border border-stone-700">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
          </div>
          <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">{rating}</span>
          <span className="text-[10px] text-stone-400 dark:text-stone-500">({reviews})</span>
        </div>

        {/* Title */}
        <Link to={`/shop/${id}`} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex-grow">
          <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-50 line-clamp-2 leading-snug">
            {name}
          </h3>
        </Link>
        
        {/* Unit */}
        <span className="text-xs text-stone-400 dark:text-stone-500 mt-1">Pack size: {unit}</span>

        {/* Pricing & Add to Cart */}
        <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline space-x-1.5">
              <span className="text-base sm:text-lg font-extrabold text-stone-900 dark:text-white">
                ₹{price}
              </span>
              {originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-green-600 dark:text-green-400 font-medium">
              Save ₹{originalPrice - price}
            </span>
          </div>

          <Button
            variant="primary"
            size="sm"
            disabled={!inStock}
            className="p-2 sm:p-2.5 rounded-xl shadow-md active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
