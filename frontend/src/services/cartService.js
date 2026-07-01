import apiClient from "./apiClient";

export const cartService = {
  /**
   * Fetch active cart from backend.
   */
  getCart: async () => {
    return apiClient.get("/cart");
  },

  /**
   * Sync full local cart items array to backend.
   * @param {array} items - Array of { productId, quantity }
   */
  syncCart: async (items) => {
    return apiClient.post("/cart/sync", { items });
  },

  /**
   * Add a single item to the backend cart directly.
   * @param {string} productId
   * @param {number} quantity
   */
  addItem: async (productId, quantity = 1) => {
    return apiClient.post("/cart/items", { productId, quantity });
  },

  /**
   * Update quantity of a cart item in backend.
   * @param {string} productId
   * @param {number} quantity
   */
  updateItem: async (productId, quantity) => {
    return apiClient.put(`/cart/items/${productId}`, { quantity });
  },

  /**
   * Remove item from backend cart.
   * @param {string} productId
   */
  removeItem: async (productId) => {
    return apiClient.delete(`/cart/items/${productId}`);
  },

  /**
   * Clear all items in cart.
   */
  clearCart: async () => {
    return apiClient.delete("/cart");
  }
};
