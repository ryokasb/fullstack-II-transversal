import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../Services/User/UserService";
import { UserStorage } from "../Services/Storage/UserStorage";

export function useLogin() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!mail.trim()) {
      setMessage("Por favor ingrese su correo");
      return;
    }
    if(!password.trim()){
       setMessage("por favor ingrese su contraseña")
       return;
    }
    try {
      const result = await userService.login(mail, password);

      const idResponse = await userService.getUserIdByUsername(result.username,result.token);
      const id = idResponse.data.id;

      UserStorage.setUser({
        id: id.toString(),
        username: result.username,
        token: result.token,
        role: result.rol,
      });

      navigate("/");

    } catch (error: any) {
  console.log("Error login:", JSON.stringify(error, null, 2));

  const backendMessage =
    error?.mensaje ||  
    error?.error ||
    "Error en la autenticación";

  setMessage(backendMessage);
}
  };

  return {
    mail,
    password,
    message,
    setMail,
    setPassword,
    handleLogin,
  };
}