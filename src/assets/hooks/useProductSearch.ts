import { useEffect, useState } from "react";

export function useProductSearch(products: any[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  
  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  const filteredProducts = products.filter((item: any) =>
    item.name.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  return {
    filteredProducts,
    searchTerm,
    setSearchTerm,
  };
}