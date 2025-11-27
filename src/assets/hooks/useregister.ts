import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../Services/User/UserService";

export function useRegister() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeuser, setTypeuser] = useState("Cliente");
  const [message, setMessage] = useState("");

  const getRolId = () => {
    if (typeuser === "Vendedor") return 2;
    return 1; 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!username.trim() || !email.trim() || !password.trim()) {
      setMessage("Completa todos los campos.");
      return;
    }

    const newUser = {
      username,
      correo: email,
      password,
      rol: { id: getRolId() },
    };

    try {
      const response = await userService.register(newUser);
      console.log("Usuario registrado:", response?.data ?? response);

      setMessage("Registro exitoso  Redirigiendo...");
      setTimeout(() => navigate("/login"), 1500);

   } catch (error: any) {
  const backendMessage =
    error?.response?.data?.mensaje || 
    error?.response?.data?.error || 
    "Error al registrarse ❌";        

  setMessage(backendMessage);
}
  };

  return {
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
  };
}