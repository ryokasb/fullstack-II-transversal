import { useProductCounter } from "../../hooks/useProductCounter";
import { addToCart } from "../../Data/shoppingcart";

interface Props {
  productId: string;
}

export default function ProductCounter({ productId }: Props) {
  const {
    quantity,
    increase,
    decrease,
    reset,
  } = useProductCounter(1);

  const handleAdd = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    addToCart(user.username, productId, quantity);
    reset();
  };

  return (
    <div className="d-flex align-items-center gap-2 mt-3">

      <button className="btn btn-outline-primary" onClick={decrease}>
        -
      </button>

      <span className="fw-bold fs-5">{quantity}</span>

      <button className="btn btn-outline-primary" onClick={increase}>
        +
      </button>

      <button className="btn btn-success ms-3" onClick={handleAdd}>
        Agregar
      </button>
    </div>
  );
}