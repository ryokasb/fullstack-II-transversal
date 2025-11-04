import { useParams } from "react-router-dom";
import { products } from "../../Data/Product";
import './ProductDetail.css'
export default function DetalleProducto() {
  const { name } = useParams<{ name: string }>();

  if (!name) return <p>ID no encontrado</p>;

  const producto = products.find((p) => p.name == name);

  if (!producto) return <p>Producto no encontrado</p>;

  return (
  <main className="detalle-container">
  <div className="detalle-img-container">
    <img src={producto.images[0]} alt={producto.name} />
  </div>

  <aside className="detalle-info">
    <h1>{producto.name}</h1>
    <p className="detalle-precio">${producto.price}</p>
    <p>{producto.description}</p>
     <button className="detalle-btn">Agregar al carrito</button>
  </aside>
</main>
  );
}