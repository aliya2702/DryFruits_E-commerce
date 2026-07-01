import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/currencyFormatter";
import { useCart } from "../../context/CartContext";
import Badge from "./Badge";
import Rating from "./Rating";

/**
 * Reusable product card for grids. Accepts a product data object.
 *
 * @param {object} props
 * @param {object} props.product - Product data object.
 * @param {number} props.product.id
 * @param {string} props.product.name
 * @param {number} props.product.price
 * @param {number} [props.product.originalPrice]
 * @param {number} [props.product.rating]
 * @param {number} [props.product.reviews]
 * @param {string} [props.product.image]
 * @param {string} [props.product.emoji]
 * @param {string} [props.product.badge]
 * @param {string} [props.product.weight]
 * @param {string} [props.className]
 */
function ProductCard({ product, className = "" }) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className={`bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 hover:border-amber-500/50 dark:hover:border-amber-500/20 rounded-3xl p-5 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group relative hover-lift ${className}`}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge label={product.badge} />
        </div>
      )}

      {/* Discount tag */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <Badge label={`${discount}% OFF`} color="green" />
        </div>
      )}

      {/* Product Image / Visual */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square bg-stone-100 dark:bg-stone-950 rounded-2xl relative mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              {product.emoji || "📦"}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 dark:from-stone-950/30 to-transparent" />
          {product.emoji && product.image && (
            <span className="absolute bottom-2 right-2 text-2xl">{product.emoji}</span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="space-y-2 flex-grow flex flex-col justify-between">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-stone-900 dark:text-stone-200 text-sm line-clamp-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              {product.name}
            </h3>
          </Link>
          {product.weight && (
            <span className="text-[10px] text-stone-500 font-medium">
              Pack weight: {product.weight}
            </span>
          )}
        </div>

        {/* Rating */}
        {product.rating && (
          <Rating
            value={product.rating}
            reviewCount={product.reviews}
            size="sm"
          />
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-lg font-extrabold text-amber-400">
            {formatCurrency(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-stone-500 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product, 1)}
          className="w-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 hover:bg-amber-400 hover:text-stone-950 text-amber-400 font-bold py-2.5 rounded-xl transition-all duration-300 text-xs mt-3 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>🛒</span>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
