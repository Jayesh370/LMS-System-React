import axiosInstance from "../utils/axiosConfig.js";

const authService = {
  // Register a new user
  register: async (userData) => {
    try {
      const response = await axiosInstance.post(
        `/auth/register`,
        userData
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Registration failed" };
    }
  },

  // Verify OTP after registration
  verifyOtp: async ({ email, otp }) => {
    try {
      const response = await axiosInstance.post(`/auth/verify-otp`, { email, otp });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "OTP verification failed" };
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post(
        `/auth/login`,
        credentials
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Login failed" };
    }
  },

  // Verify token
  verifyToken: async (token) => {
    try {
      const response = await axiosInstance.get(`/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Token verification failed" };
    }
  },

  // Get user profile
  getProfile: async (token) => {
    try {
      const response = await axiosInstance.get(`/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to fetch profile" };
    }
  },
};

export default authService;
