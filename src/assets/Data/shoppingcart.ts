
export interface CartItem {
  usuarioId: string;
  productId: string;
  cantidad: number;
}

export const cart: CartItem[] = [];


export function addToCart(usuarioId: string, productId: string, cantidad: number = 1) {
  const existente = cart.find(
    (item) => item.usuarioId === usuarioId && item.productId === productId
  );

  if (existente) {
    existente.cantidad += cantidad;
    console.log(`Se aumentó la cantidad del producto ${productId} a ${existente.cantidad}`);
  } else {
    cart.push({ usuarioId, productId, cantidad });
    console.log(`Se agregó el producto ${productId} al carrito`);
  }
}

export function removeOne(usuarioId: string, productId: string) {
  const index = cart.findIndex(
    (item) => item.usuarioId === usuarioId && item.productId === productId
  );

  if (index === -1) return;

  cart[index].cantidad -= 1;

  if (cart[index].cantidad <= 0) {
    cart.splice(index, 1);
    console.log(`Producto ${productId} eliminado del carrito`);
  } else {
    console.log(`Se restó una unidad del producto ${productId}`);
  }
}


export function removeAll(usuarioId: string, productId: string) {
  const index = cart.findIndex(
    (item) => item.usuarioId === usuarioId && item.productId === productId
  );

  if (index !== -1) {
    cart.splice(index, 1);
    console.log(`Producto ${productId} eliminado completamente`);
  }
}