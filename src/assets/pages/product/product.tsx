import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../Services/Products/ProductsService";
import SearchBar from "../../components/SearchBar/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.css";
import type { Product } from "../../interfaces/ProductInterfaces";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: Product[] = await ProductService.getAllProducts();
        console.log("PRODUCTS:", response);

        const data: Product[] = response.map((item) => ({
          ...item,
          photo: item.photo
            ? `data:image/jpeg;base64,${item.photo}`
            : "/sin-imagen.png",
        }));

        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error cargando productos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (term: string) => {
    if (!term.trim()) return setFilteredProducts(products);

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredProducts(results);
  };

  if (loading) return <p className="text-center mt-5">Cargando productos...</p>;

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
              <p>No se encontraron productos</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}