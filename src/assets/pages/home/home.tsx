
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className="home">
      <header className="home__header">
        <h1>Bienvenido a DuoDeal</h1>
        <p>Tu Pagina de compra y venta de Confianza.</p>
      </header>

      <section className="home__about">
        <h2>¿Quiénes somos?</h2>
        <p>
          
        </p>
      </section>

      <section className="home__services">
        <h2>Servicios destacados</h2>
        <ul>
          <li>Consultas médicas</li>
          <li>Vacunación y desparasitación</li>
          <li>Baños y peluquería</li>
        </ul>
      </section>

      <aside className="home__aside">
        <h3>Horarios de atención</h3>
        <p>Lunes a Sábado — 9:00 a 19:00 hrs</p>
        <p>Emergencias 24/7</p>
      </aside>

      <footer className="home__footer">
        <p></p>
      </footer>
    </main>
    </>
  );
}