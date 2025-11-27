import { useRegister } from "../../hooks/useregister";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    typeuser,
    setTypeuser,
    message,
    handleSubmit,
  } = useRegister();

  return (
    <main className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      <form 
        className="p-4 border rounded-4 shadow bg-white w-100"
        style={{ maxWidth: "420px" }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">Crear Cuenta</h2>

        {/* Nombre de Usuario */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Nombre de usuario</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Correo */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Tipo de usuario */}
        <div className="mb-3">
          <label className="form-label fw-semibold d-block mb-2">Tipo de usuario</label>

          <div className="form-check">
            <input
              type="radio"
              id="cliente"
              name="typeuser"
              value="Cliente"
              className="form-check-input"
              checked={typeuser === "Cliente"}
              onChange={(e) => setTypeuser(e.target.value)}
            />
            <label htmlFor="cliente" className="form-check-label">Cliente</label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              id="vendedor"
              name="typeuser"
              value="Vendedor"
              className="form-check-input"
              checked={typeuser === "Vendedor"}
              onChange={(e) => setTypeuser(e.target.value)}
            />
            <label htmlFor="vendedor" className="form-check-label">Vendedor</label>
          </div>
        </div>

        {/* Mensaje */}
        {message && (
          <div className="alert alert-info text-center py-2">
            {message}
          </div>
        )}

        {/* Botón */}
        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Registrarse
        </button>

        {/* Link de login */}
        <p className="text-center mt-3">
          ¿Ya tienes cuenta?{" "}
          <span 
            className="text-primary fw-semibold" 
            style={{ cursor: "pointer" }}
            onClick={() => window.location.href = "/login"}
          >
            Inicia sesión
          </span>
        </p>
      </form>
    </main>
  );
}