import { useEffect, useState } from "react";
import { cart } from "../Data/shoppingcart"
import type { CartItem } from "../Data/shoppingcart";
import { products } from "../Data/Product";

interface CartDisplayItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartDisplayItem[]>([]);
  const [total, setTotal] = useState(0);

  const loadCart = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user) return;

    const userCart = cart.filter((item: CartItem) => item.usuarioId === user.username);

    const detailedItems = userCart.map((item) => {
      const product = products.find((p) => p.publicId === item.productId);
      return {
        productId: item.productId,
        quantity: item.cantidad,
        name: product?.name || "Producto",
        price: product?.price || 0,
        image: product?.images[0] || "",
      };
    });

    setItems(detailedItems);

    const totalPrice = detailedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  const updateQuantity = (productId: string, change: number) => {
    const item = cart.find(c => c.productId === productId);
    if (!item) return;

    item.cantidad += change;

    if (item.cantidad <= 0) {
      removeItem(productId);
    } else {
      loadCart();
    }
  };

  const removeItem = (productId: string) => {
    const index = cart.findIndex(c => c.productId === productId);
    if (index > -1) {
      cart.splice(index, 1);
      loadCart();
    }
  };

  const clearCart = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user) return;

    for (let i = cart.length - 1; i >= 0; i--) {
      if (cart[i].usuarioId === user.username) {
        cart.splice(i, 1);
      }
    }
    loadCart();
  };

  useEffect(() => { loadCart(); }, []);

  return {
    items,
    total,
    reload: loadCart,
    updateQuantity,
    removeItem,
    clearCart
  };
}