import './ProductsManager.css'
import { products } from "../../Data/Product";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../Data/users";

function Sell() {
  const user = getCurrentUser();
  
  const productosVendedor = products.filter((p) => p.iduser === user.id);

  return (
    <main className="sell-container container mt-5 pt-5">
      <h2 className="mb-4">Mis productos publicados</h2>

      {productosVendedor.length === 0 ? (
        <p className="text-muted">No tienes productos publicados todavía.</p>
      ) : (
        <div className="productos-grid">
          {productosVendedor.map((item) => (
            <div
              key={item.publicId}
              className="card producto-card border-0 shadow-sm p-3"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="producto-img rounded"
              />

              <h5 className="mt-2">{item.name}</h5>
              <p className="text-success fw-bold">${item.price}</p>

              <Link
                to={`/gestion/${item.publicId}`}
                className="btn btn-dark w-100"
              >
                Editar producto
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Sell;