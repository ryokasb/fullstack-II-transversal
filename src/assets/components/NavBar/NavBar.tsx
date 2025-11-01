
import './NavBar.css';
import logo from '../../images/LogoDuoDeal.png'; 
import { FaShoppingCart,FaSearch } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo DuoDeal" className="navbar__logo" />
      <div className='Search'>
              <a>Buscar</a>
             <input type="text" />
             <button className='boton-buscar'><FaSearch  size={24} /></button>
      </div>
      <ul className="navbar__links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
      </ul>
      <a href="/carrito"><FaShoppingCart size={24} color="white" /> </a>
              
    </nav>
  );
} 