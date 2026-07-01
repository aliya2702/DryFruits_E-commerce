import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable Button component with variant, size, and link support.
 *
 * @param {object} props
 * @param {'primary'|'secondary'|'outline'|'ghost'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {string} [props.href] - If provided, renders as a <Link>.
 * @param {boolean} [props.fullWidth] - Stretch to 100% width.
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.loading]
 * @param {React.ReactNode} [props.leftIcon]
 * @param {React.ReactNode} [props.rightIcon]
 * @param {string} [props.className] - Additional classes.
 * @param {React.ReactNode} props.children
 */
const VARIANT_CLASSES = {
  primary:
    "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-stone-950 font-bold shadow-lg shadow-amber-900/20",
  secondary:
    "bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 dark:hover:bg-stone-700 text-stone-100 border border-stone-700",
  outline:
    "bg-transparent border border-stone-700 hover:border-amber-500/50 hover:bg-stone-900/30 text-stone-300 font-semibold",
  ghost:
    "bg-transparent hover:bg-stone-900/40 text-stone-400 hover:text-amber-400",
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-xs rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-full",
};

function Button({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...rest
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer font-semibold tracking-wide";
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled || loading ? "opacity-50 pointer-events-none" : "hover:-translate-y-0.5";

  const classes = `${baseClasses} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${widthClass} ${disabledClass} ${className}`.trim();

  const content = (
    <>
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!loading && rightIcon}
    </>
  );

  if (href && !disabled) {
    return (
      <Link to={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
}

export default Button;
