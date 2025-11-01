import './Cart.css';

export default function Cart() {
  return (
    <main>
    <div>
    <div className="cart">
      <h2 className="cart__title">Carrito</h2>
      {}
      <p className="cart__empty">Tu carrito está vacío</p>

      <button className="cart__payButton">Pagar</button>
    </div>
    </div>
    </main>
  );
}