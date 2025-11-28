
export interface ProductoDTO {
  userId: number;
  token: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  photo?: string; 
}
export interface CartUIItem {
  id: number;
  productId: number;
  quantity: number;
  name: string;
  price: number;
  photoBase64: string | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock?: number;
  photo?: string; 
  images?: string[]; 
}


export interface AddItemRequest {
  token: string;
  userid: String;
  productid: number;
  quantity: number;
}

export interface UpdateItemRequest {
  token: string;
  quantity: number;
}

export interface DeleteItemRequest {
  token: string;
}


export interface CartItem {
  id: number;          
  productId: number;   
  quantity: number;    
  name?: string;       
  price?: number;       
  photo?: string;      
}

export interface Cart {
  id: number;          
  userId: String;      
  items: CartItem[];    
  totalPrice?: number; 
}

