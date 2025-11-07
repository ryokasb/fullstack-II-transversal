
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
  return (
    <>
    <main className="home container mt-5 pt-5">
      <header className="home__header">
        <h1>Bienvenido a DuoDeal</h1>
        <p>Tu Pagina de compra y venta de Confianza.</p>
      </header>

      <section className="home__about">
        <h2>¿Quiénes somos?</h2>
        <p>
          DuoDeal es una Pagina donde puedes comprar/vender de forma segura y sencilla. 
        </p>
      </section>

      <aside className="home__aside">
    
      </aside>

      <footer className="home__footer">
        <p></p>
      </footer>
    </main>
    </>
  );
}