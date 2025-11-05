import './NavBar.css';
import logo from '../../images/LogoDuoDeal.png';
import { FaShoppingCart } from 'react-icons/fa';

import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-nav px-4">

      <div className="navbar-brand d-flex align-items-center">
        <img src={logo} alt="Logo DuoDeal" className="navbar__logo" />
      </div>

      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navLinks"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navLinks">
        <ul className="navbar-nav ms-4 gap-3">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/productos">Productos</Link>
          </li>
        </ul>
      </div>

      <Link to="/carrito" className="navbar-cart ms-auto">
        <FaShoppingCart size={24} color="white" />
      </Link>
    </nav>
  );
}