import { useEffect, useState } from "react";
import ProductService from "../Services/Products/ProductsService";
import type { Product } from "../interfaces/ProductInterfaces";
import { UserStorage } from "../Services/Storage/UserStorage";

export function useProductManager() {
  const [userId, setUserId] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
  const idStr = UserStorage.getUserId();

  if (idStr) {
    const parsedId = Number(idStr);
    setUserId(isNaN(parsedId) ? null : parsedId);
  } else {
    setUserId(null);
  }
}, []);

  // Cargar productos del usuario
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const response: Product[] = await ProductService.getAllProducts();

        const formatted = response.map((item) => ({
          ...item,
          photo: item.photo
            ? `data:image/jpeg;base64,${item.photo}`
            : "/sin-imagen.png",
        }));

        // Filtrar productos según userId del usuario logueado
        const userProducts = formatted.filter(p => p.iduser === userId);

        setProducts(userProducts);
        setFilteredProducts(userProducts);
      } catch (error) {
        console.error("Error cargando productos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [userId]);

  const handleSearch = (term: string) => {
    if (!term.trim()) return setFilteredProducts(products);

    setFilteredProducts(
      products.filter(p =>
        p.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return {
    userId,
    products,
    filteredProducts,
    loading,
    handleSearch,
  };
}
