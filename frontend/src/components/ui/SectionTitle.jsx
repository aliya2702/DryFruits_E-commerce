import React from "react";

/**
 * Reusable section heading with title, optional subtitle, and accent divider.
 *
 * @param {object} props
 * @param {string} props.title - Main heading text.
 * @param {string} [props.subtitle] - Description text below the title.
 * @param {'left'|'center'} [props.align='center']
 * @param {string} [props.className] - Additional wrapper classes.
 */
function SectionTitle({ title, subtitle, align = "center", className = "" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const dividerAlign = align === "center" ? "mx-auto" : "";

  return (
    <div className={`max-w-xl mb-16 ${alignClass} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100">
        {title}
      </h2>
      <div className={`section-divider ${dividerAlign}`} />
      {subtitle && (
        <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
