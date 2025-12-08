/**
 * API Configuration
 * Handles API URL for development and production environments
 */

// Determine API base URL based on environment
const getApiUrl = () => {
  // Production: Use environment variable or default to production domain
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_API_URL || 'https://api.stratigo.io/api';
  }
  
  // Development: Use Vite proxy (relative URL)
  return '/api';
};

export const API_URL = getApiUrl();

// Helper function to build full API endpoint URLs
export const buildApiUrl = (endpoint) => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_URL}/${cleanEndpoint}`;
};

export default API_URL;

