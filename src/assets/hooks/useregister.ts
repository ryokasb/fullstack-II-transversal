import { useState } from "react";
import { createUser } from "../Data/users";

export function useRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [typeuser, setTypeuser] = useState("Cliente");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = createUser({ username, password, typeuser });
    setMessage(result.message);

    if (result.success) {
      setUsername("");
      setPassword("");
      setTypeuser("Cliente");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    typeuser,
    setTypeuser,
    message,
    handleSubmit,
  };
}