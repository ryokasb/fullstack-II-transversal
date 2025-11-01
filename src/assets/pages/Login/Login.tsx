import './Login.css';

function Login(){
    return(
      <main className="Login">
      <form className="Datos-usuario">
        <h1>Login</h1>
        <p>Usuario</p>
        <input type="text" placeholder="Usuario" />
        <p>Contraseña</p>
        <input type="Password" placeholder="Contraseña"/>
        <button>ingresar</button>
        <br>
        </br>
        <button>Crear cuenta</button>
      </form>
 
      </main>
    )
}

export default Login