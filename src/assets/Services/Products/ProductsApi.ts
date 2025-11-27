import axios from "axios";
import type { ProductoDTO, Product } from "../../interfaces/ProductInterfaces";

const UrlBase = "http://localhost:8082/duodeal";

const api = axios.create({
  baseURL: UrlBase,
});

export const getProducts = async () => {
  return await api.get("/products");
};

export const getProductById = async (id: number) => {
  return await api.get(`/products/${id}`);
};

export const createProduct = async (product: ProductoDTO) => {
  return await api.post("/products/", product);
};

export const updateProduct = async (id: number, product: Partial<Product>) => {
  return await api.put(`/products/${id}`, product);
};

export const deleteProduct = async (id: number) => {
  return await api.delete(`/products/${id}`);
};

export const ProductService = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default ProductService;