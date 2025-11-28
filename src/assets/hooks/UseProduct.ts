import { useEffect, useState } from "react";
import ProductService from "../Services/Products/ProductsService";
import type { Product } from "../interfaces/ProductInterfaces";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: Product[] = await ProductService.getAllProducts();

        const formatted = response.map((item) => ({
          ...item,
          photo: item.photo
            ? `data:image/jpeg;base64,${item.photo}`
            : "/sin-imagen.png",
        }));

        setProducts(formatted);
        setFilteredProducts(formatted);
      } catch (error) {
        console.error("Error cargando productos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (term: string) => {
    if (!term.trim()) return setFilteredProducts(products);

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredProducts(results);
  };

  return {
    products,
    filteredProducts,
    loading,
    handleSearch,
  };
}
