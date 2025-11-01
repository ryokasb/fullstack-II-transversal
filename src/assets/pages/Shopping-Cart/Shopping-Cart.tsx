import './Cart.css';
import NavBar from '../../components/NavBar/NavBar';

export default function Cart() {
  return (
    <div>
        <NavBar/>
    <div className="cart">
      <h2 className="cart__title">Carrito</h2>
      {}
      <p className="cart__empty">Tu carrito está vacío</p>

      <button className="cart__payButton">Pagar</button>
    </div>
    </div>
  );
}