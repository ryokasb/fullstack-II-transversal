import { useProductCounter } from "../../hooks/useProductCounter";
import Swal from 'sweetalert2';
import CartService from "../../Services/Cart/CartService";
import { UserStorage } from "../../Services/Storage/UserStorage";

interface Props {
  productId: number; 
}

export default function ProductCounter({ productId }: Props) {
  const { quantity, increase, decrease, reset } = useProductCounter(1);

  const handleAdd = async () => {
    try {
      const user = UserStorage.getUser();
      if (!user || !user.token || !user.id) {
        Swal.fire({
          icon: "error",
          title: "Usuario no autenticado",
          text: "Debes iniciar sesión para agregar productos al carrito",
        });
        return;
      }
      const request = {
        userid: String(user.id),
        productid: productId,
        quantity,
        token: user.token
      };

      await CartService.addItem(request);

      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1000
      });

      reset();
    } catch (error: any) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error al agregar al carrito",
        text: error.response?.data?.mensaje || error.message
      });
    }
  };

  return (
    <div className="d-flex align-items-center gap-2 mt-3">
      <button className="btn btn-outline-primary" onClick={decrease}>-</button>

      <span className="fw-bold fs-5">{quantity}</span>

      <button className="btn btn-outline-primary" onClick={increase}>+</button>

      <button className="btn btn-success ms-3" onClick={handleAdd}>Agregar</button>
    </div>
  );
}
