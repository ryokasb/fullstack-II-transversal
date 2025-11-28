import "./ProductsManager.css";
import { Link } from "react-router-dom";
import { useProductManager } from "../../hooks/useProductManager";

export default function Sell() {
  const { filteredProducts, loading } = useProductManager();

  return (
    <main className="sell-container container mt-5 pt-5">
      <h2 className="mb-4">Mis productos publicados</h2>

      {loading ? (
        <p className="text-muted">Cargando productos...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-muted">No tienes productos publicados todavía.</p>
      ) : (
        <div className="productos-grid">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="card producto-card border-0 shadow-sm p-3"
            >
              <img
                src={item.photo ?? "/sin-imagen.png"}
                alt={item.name ?? "Sin nombre"}
                className="producto-img rounded"
              />

              <h5 className="mt-2">{item.name}</h5>
              <p className="text-success fw-bold">${item.price}</p>

              <Link
                to={`/mis-productos/${item.id}`}
                className="btn btn-dark w-100"
              >
                Editar producto
              </Link>
            </div>
          ))}
        </div>
      )}
      <Link 
              to={``}
          className="btn btn-primary btn_nuevapublicacion"
        >+nueva publicacion+</Link>
      
    </main>
  );
}
