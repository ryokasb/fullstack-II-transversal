import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import Products from "../pages/product/product";
import Cart from "../pages/Shopping-Cart/Shopping-Cart";
import Login from "../pages/Login/Login";
import ProductDetail from "../pages/Product-Detail/ProductDetail";
import { PrivateRoute } from "./PrivateRoute"; 
import Register from "../pages/register/register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login />} />

      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } 
      />

      <Route 
        path="/productos" 
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        } 
      />

      <Route 
        path="/carrito" 
        element={
          <PrivateRoute>
          
            <Cart />
          </PrivateRoute>
        } 
      />

      <Route 
        path="/detalle/:publicId" 
        element={
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        } 
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};