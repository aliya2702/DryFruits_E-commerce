import apiClient from "./apiClient";

export const reviewService = {
  /**
   * Fetch reviews for a specific product.
   * @param {string} productId - Product ID
   */
  getProductReviews: async (productId) => {
    return apiClient.get(`/products/${productId}/reviews`);
  },

  /**
   * Post a new review for a product.
   * @param {string} productId - Product ID
   * @param {object} reviewData - { rating, comment, title }
   */
  createReview: async (productId, reviewData) => {
    return apiClient.post(`/products/${productId}/reviews`, reviewData);
  },

  /**
   * Delete an existing review.
   * @param {string} reviewId
   */
  deleteReview: async (reviewId) => {
    return apiClient.delete(`/reviews/${reviewId}`);
  }
};
