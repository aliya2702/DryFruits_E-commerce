import axios from "axios";

// Access base URL from environment variables, fallback to local development URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Request Interceptor: Attach authentication token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Centralized error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Check if token has expired / is unauthorized
    if (error.response && error.response.status === 401) {
      // Clear storage / redirect to login could be handled here or inside a context/hook
      localStorage.removeItem("auth_token");
    }
    return Promise.reject(error.response?.data || error.message || "An unexpected error occurred");
  }
);

export default apiClient;
