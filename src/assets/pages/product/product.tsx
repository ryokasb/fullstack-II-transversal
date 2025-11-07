import { products } from "../../Data/Product";
import { Link } from "react-router-dom";
import { useProductSearch } from "../../hooks/useProductSearch";
import SearchBar from "../../components/SearchBar/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.css";

export default function Products() {
  const { filteredProducts, setSearchTerm } = useProductSearch(products);

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

          <SearchBar onSearch={setSearchTerm} />

          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <article key={item.id} className="col-12 col-sm-6 col-lg-4">
                  <div className="card h-100 text-center shadow-sm">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />

                    <div className="card-body d-flex flex-column">
                      <h3>{item.name}</h3>
                      <p>${item.price}</p>
                      <Link to={`/detalle/${item.publicId}`} className="btn btn-primary mt-auto">
                        Ver más
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p>No se encontraron productos</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}