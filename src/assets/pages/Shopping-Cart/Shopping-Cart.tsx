import "./Cart.css";
import { useCart } from "../../hooks/useCart";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

export default function Cart() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <main className="cart-main">
      <div className="cart container p-4">
        <h2 className="cart__title">Carrito</h2>

        {items.length === 0 ? (
          <p className="cart__empty">Tu carrito está vacío</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.productId} className="cart-item d-flex align-items-center gap-3 p-3 border rounded-3 mb-3">
                  <img src={item.image} alt={item.name} className="cart-item__img" />

                  <div className="cart-item__details flex-grow-1">
                    <h4 className="m-0">{item.name}</h4>
                    <p className="m-0">${item.price}</p>

                    <div className="d-flex align-items-center gap-2 mt-2">
                      <button className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.productId, -1)}>
                        <FaMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.productId, +1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <p className="fw-bold fs-5 m-0">${item.price * item.quantity}</p>

                  <button className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.productId)}>
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart__total fs-4 fw-bold mt-3">
              Total: ${total}
            </div>

            <button className="btn btn-outline-danger w-100 mt-3"
              onClick={clearCart}>
              Vaciar carrito
            </button>

            <button className="cart__payButton btn btn-success w-100 mt-3">
              Pagar
            </button>
          </>
        )}
      </div>
    </main>
  );
}