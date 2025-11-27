import { useEffect, useState } from "react";
import CartService from "../Services/Cart/CartService";
import type { CartItem, Cart, UpdateItemRequest } from "../interfaces/CartInterfaces";
import { UserStorage } from "../Services/Storage/UserStorage";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  const user = UserStorage.getUser();

  // Cargar carrito desde backend
  const loadCart = async () => {
    if (!user?.id || !user?.token) return;

    try {
      const cart: Cart = await CartService.getCart(user.id);
      setItems(cart.items);
      setTotal(
        cart.items.reduce((acc, item) => acc + ((item.price ?? 0) * item.quantity), 0)
      );
    } catch (error) {
      console.error("Error al cargar el carrito:", error);
    }
  };

  // Actualizar cantidad de un item usando CartItem.id
  const updateQuantity = async (cartItemId: number, change: number) => {
    if (!user?.id || !user?.token) return;

    const item = items.find(i => i.id === cartItemId);
    if (!item) return;

    const newQuantity = item.quantity + change;
    if (newQuantity < 0) return;

    try {
      const request: UpdateItemRequest = { token: user.token, quantity: newQuantity };
      await CartService.updateItem(user.id, cartItemId, request);
      await loadCart();
    } catch (error) {
      console.error("Error al actualizar cantidad:", error);
    }
  };

  // Eliminar item del carrito usando CartItem.id
  const removeItem = async (cartItemId: number) => {
    if (!user?.id || !user?.token) return;

    const item = items.find(i => i.id === cartItemId);
    if (!item) return;

    try {
      await CartService.removeItem(user.id, item.productId, user.token);
      await loadCart();
    } catch (error) {
      console.error("Error al eliminar item:", error);
    }
  };

  // Vaciar carrito completo
  const clearCart = async () => {
    if (!user?.id || !user?.token) return;

    try {
      await CartService.clearCart(user.id, user.token);
      await loadCart();
    } catch (error) {
      console.error("Error al vaciar carrito:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return {
    items,
    total,
    reload: loadCart,
    updateQuantity,
    removeItem,
    clearCart
  };
}