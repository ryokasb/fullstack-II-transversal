import axios from "axios";
import type { AddItemRequest, UpdateItemRequest,Cart,CartItem } from "../../interfaces/CartInterfaces.ts";

const UrlBase = "http://localhost:8083/duodeal/cart";

const api = axios.create({
  baseURL: UrlBase,
});

// Obtener carrito del usuario
export const getCart = async (userId: number): Promise<Cart> => {
  const response = await api.get(`/${userId}`);
  return response.data;
};

// Agregar item al carrito
export const addItemToCart = async (request: AddItemRequest): Promise<Cart> => {
  const response = await api.post("/add", request);
  return response.data;
};

// Actualizar cantidad de item
export const updateCartItem = async (userId: number, itemId: number, request: UpdateItemRequest): Promise<Cart> => {
  const response = await api.put(`/update/${userId}/${itemId}`, request);
  return response.data;
};

// Eliminar item del carrito
export const removeCartItem = async (userId: number, productId: number, token: string): Promise<Cart> => {
  const response = await api.delete(`/remove/${userId}/${productId}/${token}`);
  return response.data;
};

// Vaciar carrito completo
export const clearCart = async (userId: number, token: string) => {
  const response = await api.delete(`/clear/${userId}/${token}`);
  return response.data;
};

export const CartService = {
  getCart,
  addItemToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
};

export default CartService;