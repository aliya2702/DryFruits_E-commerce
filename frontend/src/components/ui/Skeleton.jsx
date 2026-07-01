import React from "react";

/**
 * Skeleton loading placeholder that uses the global shimmer animation.
 *
 * @param {object} props
 * @param {'text'|'circle'|'card'|'image'|'custom'} [props.variant='text']
 * @param {string} [props.width] - CSS width (e.g. '100%', '200px').
 * @param {string} [props.height] - CSS height (e.g. '16px', '200px').
 * @param {number} [props.lines=1] - Number of text lines to render (variant=text).
 * @param {string} [props.className]
 */
function Skeleton({ variant = "text", width, height, lines = 1, className = "" }) {
  if (variant === "circle") {
    return (
      <div
        className={`skeleton rounded-full ${className}`}
        style={{ width: width || "48px", height: height || "48px" }}
      />
    );
  }

  if (variant === "image") {
    return (
      <div
        className={`skeleton rounded-2xl ${className}`}
        style={{ width: width || "100%", height: height || "200px" }}
      />
    );
  }

  if (variant === "card") {
    return (
      <div className={`bg-stone-900 rounded-3xl p-5 border border-stone-850 space-y-4 ${className}`}>
        <div className="skeleton rounded-2xl" style={{ width: "100%", height: "180px" }} />
        <div className="skeleton" style={{ width: "75%", height: "14px" }} />
        <div className="skeleton" style={{ width: "50%", height: "12px" }} />
        <div className="flex gap-2">
          <div className="skeleton" style={{ width: "60px", height: "20px" }} />
          <div className="skeleton" style={{ width: "40px", height: "20px" }} />
        </div>
        <div className="skeleton rounded-xl" style={{ width: "100%", height: "40px" }} />
      </div>
    );
  }

  /* Default: text lines */
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }, (_, i) => (
        <div
          key={i}
          className="skeleton"
          style={{
            width: width || (i === lines - 1 && lines > 1 ? "60%" : "100%"),
            height: height || "14px",
          }}
        />
      ))}
    </div>
  );
}

export default Skeleton;
