import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Products from "../pages/product/product";
import Cart from "../pages/Shopping-Cart/Shopping-Cart";
import Login from "../pages/Login/Login";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />

      <Route path="/" element={<Home />} />

      <Route path="/Productos" element={<Products />} />
      
      <Route path="/Carrito" element={<Cart />} />
    </Routes>
  );
};