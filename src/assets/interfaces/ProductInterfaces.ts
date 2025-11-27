
export interface ProductoDTO {
  userId: number;
  token: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  photo: string | null; 
}


export interface Product {
  id: number;
  iduser: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  photo: string | null;
}
