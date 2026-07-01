import React from "react";

/**
 * Small inline badge/chip for product labels (Best Seller, New, etc.).
 *
 * @param {object} props
 * @param {string} props.label - Badge text.
 * @param {'amber'|'green'|'red'|'blue'|'stone'} [props.color='amber']
 * @param {boolean} [props.pulse] - Show a subtle pulse animation.
 * @param {string} [props.className]
 */
const COLOR_MAP = {
  amber:
    "bg-amber-500/10 border-amber-500/30 text-amber-300",
  green:
    "bg-green-500/10 border-green-500/30 text-green-300",
  red:
    "bg-red-500/10 border-red-500/30 text-red-300",
  blue:
    "bg-blue-500/10 border-blue-500/30 text-blue-300",
  stone:
    "bg-stone-500/10 border-stone-500/30 text-stone-300",
};

function Badge({ label, color = "amber", pulse = false, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 border text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${COLOR_MAP[color]} ${pulse ? "animate-scale-pulse" : ""} ${className}`}
    >
      {label}
    </span>
  );
}

export default Badge;
