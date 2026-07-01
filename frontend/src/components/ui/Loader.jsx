import React from "react";

/**
 * Full-page or inline loading spinner with branding.
 *
 * @param {object} props
 * @param {boolean} [props.fullPage=false] - If true, renders as a fixed full-screen overlay.
 * @param {string} [props.text='Loading...'] - Text below the spinner.
 * @param {string} [props.className]
 */
function Loader({ fullPage = false, text = "Loading...", className = "" }) {
  const spinner = (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      {/* Animated ring */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-stone-800 rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 rounded-full animate-spin" />
      </div>
      {text && (
        <p className="text-stone-500 text-xs font-semibold tracking-wider uppercase animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-[8000] bg-stone-950/90 backdrop-blur-sm flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default Loader;
