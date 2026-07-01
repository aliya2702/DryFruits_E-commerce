import React from "react";

/**
 * Reusable generic card container for any content block.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.hoverable=false] - Enable hover-lift effect.
 * @param {boolean} [props.glass=false] - Use glass-card style.
 * @param {'sm'|'md'|'lg'} [props.padding='md']
 * @param {string} [props.className]
 */
const PADDING_MAP = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

function Card({ children, hoverable = false, glass = false, padding = "md", className = "" }) {
  const base = glass
    ? "glass-card"
    : "bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 rounded-3xl";

  const hoverClass = hoverable
    ? "hover-lift hover:border-amber-500/20 hover:shadow-amber-500/5"
    : "";

  return (
    <div className={`${base} ${PADDING_MAP[padding]} ${hoverClass} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
