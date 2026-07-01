import React from "react";

/**
 * Displays a star rating with optional review count.
 *
 * @param {object} props
 * @param {number} props.value - Rating value (0–5).
 * @param {number} [props.max=5] - Maximum rating value.
 * @param {number} [props.reviewCount] - Number of reviews to display.
 * @param {'sm'|'md'|'lg'} [props.size='sm']
 * @param {string} [props.className]
 */
const SIZE_MAP = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

function Rating({ value, max = 5, reviewCount, size = "sm", className = "" }) {
  const fullStars = Math.floor(value);
  const hasHalf = value - fullStars >= 0.5;
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={`inline-flex items-center gap-1.5 ${SIZE_MAP[size]} ${className}`}>
      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {hasHalf && <span className="text-yellow-400 opacity-60">★</span>}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} className="text-stone-600">★</span>
        ))}
      </div>

      {/* Numeric */}
      <span className="font-bold text-stone-300">{value}</span>

      {/* Review count */}
      {reviewCount !== undefined && (
        <>
          <span className="text-stone-600">|</span>
          <span className="text-stone-500">({reviewCount.toLocaleString("en-IN")} reviews)</span>
        </>
      )}
    </div>
  );
}

export default Rating;
