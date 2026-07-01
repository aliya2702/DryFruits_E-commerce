/**
 * Store-specific configuration settings for e-commerce logic.
 */
export const storeConfig = {
  currency: {
    code: "INR",
    symbol: "₹",
    locale: "en-IN",
  },
  shipping: {
    freeShippingThreshold: 999, // Free shipping above ₹999
    standardCost: 50,
  },
  tax: {
    defaultRate: 0.05, // 5% GST for dry fruits/nuts
    chocolateRate: 0.18, // 18% GST for chocolates
  },
  inventory: {
    lowStockThreshold: 10,
    showOutOfStock: true,
  },
};
