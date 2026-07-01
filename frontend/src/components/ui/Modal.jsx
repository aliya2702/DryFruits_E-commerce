import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Accessible modal dialog with overlay, escape-to-close, and click-outside-to-close.
 *
 * @param {object} props
 * @param {boolean} props.isOpen - Controls visibility.
 * @param {Function} props.onClose - Callback to close the modal.
 * @param {string} [props.title] - Optional heading.
 * @param {'sm'|'md'|'lg'|'xl'} [props.size='md']
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
const SIZE_MAP = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

function Modal({ isOpen, onClose, title, size = "md", children, className = "" }) {
  const contentRef = useRef(null);

  /* Close on Escape key */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Content panel */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`relative w-full ${SIZE_MAP[size]} bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden ${className}`}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800">
                <h3 className="text-lg font-bold text-stone-100">{title}</h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-stone-500 hover:text-stone-200 hover:bg-stone-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {children}
            </div>

            {/* Close button when no title */}
            {!title && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-stone-500 hover:text-stone-200 hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
