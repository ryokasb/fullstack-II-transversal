
import type { AddItemRequest, UpdateItemRequest, Cart } from "../../interfaces/CartInterfaces";
import axios from "axios";

const UrlBase = "http://localhost:8083/duodeal/cart";

const api = axios.create({
  baseURL: UrlBase,
});

const CartService = {

  async getCart(userId: string): Promise<Cart> {
    const response = await api.get(`/${userId}`);
    return response.data;
  },

 
  async addItem(request: AddItemRequest): Promise<Cart> {
    const response = await api.post("/add", request);
    return response.data;
  },

 
  async updateItem(userId: string, itemId: number, request: UpdateItemRequest): Promise<Cart> {
    const response = await api.put(`/update/${userId}/${itemId}`, request);
    return response.data;
  },

  async removeItem(userId:string, productId: number, token: string): Promise<Cart> {
    const response = await api.delete(`/remove/${userId}/${productId}/${token}`);
    return response.data;
  },


  async clearCart(userId:string, token: string): Promise<{ mensaje: string }> {
    const response = await api.delete(`/clear/${userId}/${token}`);
    return response.data;
  },
};

export default CartService;
