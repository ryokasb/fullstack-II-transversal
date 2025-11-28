import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./producteditor.css";
import { UserStorage } from "../../Services/Storage/UserStorage";
import { useProductEditor } from "../../hooks/useProductEditor";

export default function Producteditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = UserStorage.getUser();

  if (!id) {
    return <p className="text-center mt-5">ID de producto no encontrado</p>;
  }

  const numericId = Number(id);

  const {
    product,
    loading,
    error,
    name,
    price,
    quantity,
    description,
    handleChange,
    saveChanges,
  } = useProductEditor(numericId);

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p>No estás autenticado</p>
      </div>
    );
  }

  if (loading) return <p className="text-center mt-5">Cargando producto...</p>;

  if (!product) return <p className="text-center mt-5">Producto no encontrado</p>;

  if (String(product.iduser) !== String(user.id)) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-center">
          No tienes permiso para editar este producto
        </p>
      </div>
    );
  }

  return (
    <main className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Editar Producto</h2>

      <div className="d-flex justify-content-center mb-4">
        <img
          src={product.photo ?? "/sin-imagen.png"}
          alt={product.name}
          className="img-fluid rounded shadow"
          style={{ maxWidth: "500px", width: "100%", height: "auto" }}
        />
      </div>

      <div>
        <label className="fw-semibold">Nombre</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={handleChange}
        />

        <label className="fw-semibold mt-3">Precio</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />

        <label className="fw-semibold mt-3">Cantidad</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />

        <label className="fw-semibold mt-3">Descripción</label>
        <textarea
          name="description"
          className="form-control"
          value={description || ""}
          rows={3}
          onChange={handleChange}
        />

        {error && <p className="text-danger mt-2">{error}</p>}
      </div>

      <div className="botones mt-4">
        <button
          className="btn btn-primary w-100 mb-2 fw-semibold"
          onClick={saveChanges}
        >
          Guardar Cambios
        </button>

        <button
          className="btn btn-danger w-100 fw-semibold"
          onClick={() => navigate(-1)}
        >
          Cancelar
        </button>
      </div>
    </main>
  );
}
