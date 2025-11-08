import { useState } from "react";

export function useProductEditor(initialData: {
  name: string;
  description: string;
  price: number;
}) {
  const [name, setName] = useState(initialData.name);
  const [description, setDescription] = useState(initialData.description);
  const [price, setPrice] = useState(initialData.price);
  const [error, setError] = useState(""); // 👈 agregado

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "description") setDescription(value);
    if (name === "price") {
      if (/[^0-9.,]/.test(value)) {
        setError("El precio solo puede contener números."); // 👈 en vez de alert
        return;
      }
      setError(""); // limpia el error si es válido
      setPrice(Number(value));
    }
  };

  return {
    name,
    description,
    price,
    setName,
    setDescription,
    setPrice,
    handleChange,
    error, // 👈 lo retornamos para mostrarlo
  };
}
