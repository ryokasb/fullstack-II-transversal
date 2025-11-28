import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useProducts } from "../../hooks/UseProduct"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.css";

export default function Products() {
  const { filteredProducts, loading, handleSearch } = useProducts();

  return (
    <main className="container mt-5 pt-5">
      <section className="row">
        <header className="col-12 mb-4 text-center">
          <h1>Productos Disponibles</h1>
        </header>

        <aside className="col-12 col-md-3 mb-4">
          <div className="p-3 bg-light shadow-sm">
            <h3>Filtros</h3>
          </div>
        </aside>

        <div className="col-12 col-md-9">
          <SearchBar onSearch={handleSearch} />

          {loading ? (
            <p className="text-center mt-4">Cargando productos...</p>
          ) : (
            <div className="row g-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <article key={item.id} className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100 text-center shadow-sm">
                      <img
                        src={item.photo ?? "/sin-imagen.png"}
                        alt={item.name ?? "Sin nombre"}
                        className="card-img-top"
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <Link to={`/detalle/${item.id}`} className="btn btn-primary mt-auto">
                          Ver más
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <p className="text-center mt-4">No se encontraron productos</p>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
