import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Data/users";

export function useLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const result = login(username, password);

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    localStorage.setItem("user", JSON.stringify(result.user));
    navigate("/");
  };

  return {
    username,
    password,
    message,
    setUsername,
    setPassword,
    handleLogin
  };
}