import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variants = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30",
    secondary: "bg-stone-100 hover:bg-stone-200 text-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200",
    outline: "border border-stone-200 hover:border-amber-600 text-stone-700 hover:text-amber-600 dark:border-stone-700 dark:hover:border-amber-500 dark:text-stone-300 dark:hover:text-amber-400",
    danger: "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20",
    ghost: "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800",
  };

  const sizes = {
    xs: "px-2.5 py-1 text-[11px]",
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
