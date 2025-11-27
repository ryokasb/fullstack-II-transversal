import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../Services/Products/ProductsService";
import './ProductDetail.css';
import ProductCounter from "../../components/ProductCounter/ProductCounter";
import type { Product } from "../../interfaces/ProductInterfaces";

export default function DetalleProducto() {
  const { id } = useParams<{ id: string }>(); 
  const [producto, setProducto] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID no encontrado");
      setLoading(false);
      return;
    }

    const fetchProducto = async () => {
      try {
        const numericId = Number(id);
        if (isNaN(numericId)) throw new Error("ID inválido");

        const response = await ProductService.getProductById(numericId);
        setProducto(response);
      } catch (err) {
        setError("Producto no encontrado");
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <main className="detalle-container container mt-5 pt-5">
  <div className="detalle-img-container">
    {producto.photo ? (
      <img src={`data:image/png;base64,${producto.photo}`} alt={producto.name} />
    ) : (
      <p>No hay imagen disponible</p>
    )}
  </div>

  <aside className="detalle-info">
    <h1>{producto.name}</h1>
    <p className="detalle-precio">${producto.price}</p>
    <p>{producto.description}</p>
    <p>Stock disponible: {producto.stock}</p>
    <ProductCounter productId={producto.id} />
  </aside>
</main>
  );
}