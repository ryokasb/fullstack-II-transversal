import './NavBar.css';
import logo from '../../images/LogoDuoDeal.png'; 
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo DuoDeal" className="navbar__logo" />
      </Link>

      <div className='Search'>
        <span>Buscar</span>
        <input type="text" />
        <button className='boton-buscar'>
          <FaSearch size={24} />
        </button>
      </div>

      
      <ul className="navbar__links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
      </ul>
      <Link to="/carrito" className="navbar__cart">
        <FaShoppingCart size={24} color="white" />
      </Link>
    </nav>
  );
}