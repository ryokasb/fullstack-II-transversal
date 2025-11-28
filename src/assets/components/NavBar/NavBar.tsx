import './NavBar.css';
import logo from '../../images/LogoDuoDeal.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '../../Services/User/UserService';
import Swal from "sweetalert2";
import { UserStorage } from '../../Services/Storage/UserStorage';

export default function NavBar() {
  const navigate = useNavigate();
  const user = UserStorage.getUser();

  const handleLogout = () => {
    Swal.fire({
      title: "Cerrar sesión",
      text: "¿Seguro que quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#111",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        userService.logout();
        navigate("/login");
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-nav px-4">
       <Link  to={'/'}><div className="navbar-brand d-flex align-items-center">
        <img src={logo} alt="Logo DuoDeal" className="navbar__logo" />
      </div></Link>
      

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
          
        
           {user?.role === "USER" ? (
           <li className="nav-item">
              <Link className="nav-link text-white" to="/productos">
                  Productos
              </Link>
                 </li>
                   ) : user?.role === "ADMIN" ? (
                    <li className="nav-item">
                     <Link className="nav-link text-white" to="/gestion">
                      Gestión
                    </Link>
                   </li>
              ) : user?.role === "DEALER" ? (
                    <li className="nav-item">
                     <Link className="nav-link text-white" to="/mis-productos">
                         Mis productos
                     </Link>
                  </li>
                  ) : null}
        </ul>
      </div>
      {user?.role === "USER"  && (
        <Link to="/carrito" className="navbar-cart ms-3">
          <FaShoppingCart size={24} color="white" />
        </Link> 
      )}
      
      <div className='bienvenida'>
        {user && <p>Bienvenido, {user.username}</p>}
      </div>

      <button className='btn-cerrarsesion' onClick={handleLogout}>
        Cerrar sesión
      </button>

      


    </nav>
  );
}