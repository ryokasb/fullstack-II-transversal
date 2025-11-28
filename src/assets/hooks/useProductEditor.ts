import { useEffect, useState } from "react";
import ProductService from "../Services/Products/ProductsService";
import type { Product } from "../interfaces/ProductInterfaces";
import { UserStorage } from "../Services/Storage/UserStorage";

export function useProductEditor(id: number) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState<number | string>("");

  const user = UserStorage.getUser();

  // Obtener datos del producto
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await ProductService.getProductById(id);

        const formattedProduct = {
          ...result,
          photo: result.photo
            ? `data:image/jpeg;base64,${result.photo}`
            : "/sin-imagen.png",
        };

        setProduct(formattedProduct);
        setName(formattedProduct.name);
        setPrice(formattedProduct.price);
        setDescription(formattedProduct.description);
        setQuantity(formattedProduct.quantity);

      } catch (err) {
        console.error("Error obteniendo producto", err);
        setError("No se pudo cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // Manejo de inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "price") setPrice(value === "" ? "" : Number(value));
    if (name === "quantity") setQuantity(value === "" ? "" : Number(value));
    if (name === "description") setDescription(value);
  };

  // Guardar cambios
  const saveChanges = async () => {
    if (!user?.token || !product) return;

    if (!name.trim()) return setError("El nombre no puede estar vacío");
    if (price === "" || Number(price) <= 0)
      return setError("El precio debe ser mayor a 0");
    if (quantity === "" || Number(quantity) < 0)
      return setError("La cantidad debe ser 0 o mayor");

    try {
      const updateData = {
        name,
        price: Number(price),
        quantity: Number(quantity),
        description,
        token: user.token 
      };

      await ProductService.updateProduct(product.id, updateData);

      setError("");
      alert("Producto actualizado con éxito");

    } catch (err) {
      console.error("Error actualizando producto", err);
      setError("No se pudo actualizar el producto");
    }
  };

  return {
    product,
    loading,
    error,
    name,
    price,
    description,
    quantity,
    handleChange,
    saveChanges,
  };
}
