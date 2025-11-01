import { products } from "../../../Data/Product";
import "./Product.css";

export default function Products() {
  return (
    <main className="products-page">
      <section className="products-main">
        <header className="products-header">
          <h1>Productos Disponibles</h1>
          <p>Compra y venta de productos con confianza.</p>
        </header>
           <aside className="products-aside">
           {}
             <h3>Filtros</h3>
           </aside>
        <div className="products-list">
          {products.map((item) => (
            <article key={item.id} className="product-card">
              <img
                src={item.images[0]}
                alt={item.name}
                className="product-card__img"
              />
              <h3 className="product-card__name">{item.name}</h3>
              <p className="product-card__price">${item.price}</p>
              <button className="product-card__btn">Ver más</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}