import ProductsApi from "../../Services/Products/ProductsApi";
import type { Product } from "../../interfaces/ProductInterfaces";

const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await ProductsApi.getProducts();

    const embedded = response.data?._embedded;
    const list = embedded?.productList ?? [];

    return list.map((item: any) => ({
      ...item,
      id: item.id ?? item.productId,
      photo: item.photo ?? item.foto ?? null,
    }));
  },

  async getProductById(id: number) {
  const response = await ProductsApi.getProductById(id);
  
  const product = response.data?._embedded?.product || response.data;

  return {
    ...product,
    photo: product.photo ?? null,
  };
},

  async createProduct(product: any) {
    const response = await ProductsApi.createProduct(product);
    return response.data;
  },

  async updateProduct(id: number, productData: Partial<Product>) {
    const response = await ProductsApi.updateProduct(id, productData);
    return response.data;
  },

  async deleteProduct(id: number) {
    const response = await ProductsApi.deleteProduct(id);
    return response.data;
  },
};

export default ProductService;
