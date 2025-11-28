import { useEffect, useState } from "react";
import CartService from "../Services/Cart/CartService";
import ProductService from "../Services/Products/ProductsService";
import type { Cart, CartUIItem } from "../interfaces/CartInterfaces";
import type { Product } from "../interfaces/ProductInterfaces";
import { UserStorage } from "../Services/Storage/UserStorage";

export function useCart() {
  const [items, setItems] = useState<CartUIItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  const user = UserStorage.getUser();

  const loadCart = async () => {
    if (!user?.id || !user?.token) return;

    try {
      const cart: Cart = await CartService.getCart(user.id);
      const products: Product[] = await ProductService.getAllProducts();

      const mapped: CartUIItem[] = cart.items.map(item => {
        const product = products.find(p => p.id === item.productId);

        return {
          id: item.id,
          productId: item.productId,
          quantity: item.quantity,
          name: product?.name ?? "Producto no disponible",
          price: product?.price ?? 0,
          photoBase64: product?.photo ?? null 
        };
      });

      setItems(mapped);

      setTotal(
        mapped.reduce((acc, item) => acc + (item.price * item.quantity), 0)
      );
    } catch (error) {
      console.error("Error al cargar el carrito:", error);
    }
  };

  const updateQuantity = async (cartItemId: number, change: number) => {
  if (!user?.id || !user?.token) return;

  const item = items.find(i => i.id === cartItemId);
  if (!item) return;

  const newQuantity = item.quantity + change;

  try {
    await CartService.updateItem(user.id, cartItemId, {
      token: user.token,
      quantity: newQuantity
    });
    await loadCart(); 
  } catch (error) {
    console.error("Error al actualizar cantidad:", error);
  }
};

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
