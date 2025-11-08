import { useParams } from "react-router-dom";
import { products } from "../../Data/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import "./producteditor.css"
import { getCurrentUser } from "../../Data/users";
import { useProductEditor } from "../../hooks/useProductEditor";

export default function Producteditor() {
  const { publicId } = useParams<{ publicId: string }>();
  const user = getCurrentUser();

  if (!publicId) return <p className="text-center mt-5">ID no encontrado</p>;

  const producto = products.find((p) => p.publicId == publicId);

  if (producto?.iduser !== user?.id)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-center">No tienes permiso para editar este producto</p>
      </div>
    );

  if (!producto) return <p className="text-center mt-5">Producto no encontrado</p>;

  const { name, description, price, handleChange,error } = useProductEditor(producto);

  return (
    <main className="container mt-5 pt-5">
      <div className="d-flex justify-content-center mb-4">
        <img
          src={producto.images[0]}
          alt={producto.name}
          className="img-fluid rounded shadow"
          style={{ maxWidth: "500px", width: "100%", height: "auto" }}
        />
      </div>

      <div className="text-left">
        <p>nombre:</p>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={handleChange}
        />
        <p>precio:</p>
        <input
          type="text"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
        {error && <p className="text-danger">{error}</p>}
        <p>description:</p>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="botones">
       <button className="btn btn-primary w-100 mb-2 fw-semibold">subir</button>
       <button className="btn btn-danger w-100 mb-2 fw-semibold">cancelar</button>
      </div>
    </main>
  );
}