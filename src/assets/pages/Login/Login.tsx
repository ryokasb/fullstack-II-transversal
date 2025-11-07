import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const {
    username,
    password,
    message,
    setUsername,
    setPassword,
    handleLogin
  } = useLogin();

  return (
    <main className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f8f9fa' }}>

      <form 
        className="p-4 border rounded-4 shadow-lg bg-white w-100"
        style={{ maxWidth: "420px" }}
        onSubmit={handleLogin}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">Iniciar Sesión</h2>

    
        <div className="mb-3">
          <label className="form-label fw-semibold">Usuario</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

       
        <div className="mb-3">
          <label className="form-label fw-semibold">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {message && (
          <div className="alert alert-danger text-center py-2 mb-3">
            {message}
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100 mb-2 fw-semibold">
          Ingresar
        </button>
         <p className="text-center mt-3">
          ¿No tienes cuenta?{" "}
          <span 
            className="text-primary fw-semibold" 
            style={{ cursor: "pointer" }}
            onClick={() => window.location.href = "/register"}
          >
            crea una aqui
          </span>
        </p>

      </form>

    </main>
  );
}

export default Login;