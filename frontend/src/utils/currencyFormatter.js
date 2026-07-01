/**
 * Formats a numeric value into a standard currency format (INR by default).
 * 
 * @param {number} value - The numeric price to format.
 * @param {string} [locale='en-IN'] - The locale string.
 * @param {string} [currency='INR'] - The currency code.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(value, locale = "en-IN", currency = "INR") {
  if (value === undefined || value === null || isNaN(value)) {
    return "";
  }
  
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export default formatCurrency;
