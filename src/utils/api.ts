import axios from "axios";

const API_URL = "http://localhost:4000";

export const fetchCart = async () => {
  return await axios.get(`${API_URL}/cart`);
};

export const addToCart = async (productId: string, quantity = 1) => {
  return await axios.post(`${API_URL}/cart`, { productId, quantity });
};

export const updateCartItem = async (productId: string, quantity: number) => {
  return await axios.put(`${API_URL}/cart/${productId}`, { quantity });
};

export const removeCartItem = async (productId: string) => {
  return await axios.delete(`${API_URL}/cart/${productId}`);
};

export const placeOrder = async () => {
  return await axios.post(`${API_URL}/orders`);
};
