import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Products from "../pages/product/product";
import Cart from "../pages/Shopping-Cart/Shopping-Cart";
import Login from "../pages/Login/Login";
import ProductDetail from "../pages/Product-Detail/ProductDetail";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />

      <Route path="/" element={<Home />} />

      <Route path="/Productos" element={<Products />} />
      
      <Route path="/Carrito" element={<Cart />} />

      <Route path="/Detalle/:name" element={<ProductDetail/>} />

    </Routes>
  );
};