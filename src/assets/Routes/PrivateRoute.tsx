import type { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserStorage } from "../Services/Storage/UserStorage";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const user = UserStorage.getUsername(); 
  const userRole = UserStorage.getUserRole(); 
  const esVendedor = userRole === "DEALER"; 

  const location = useLocation();
  const currentRoute = location.pathname;

 
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if ((currentRoute === "/mis-productos" || currentRoute.startsWith("/mis-productos/")) && !esVendedor) {
    return <Navigate to="/" replace />;
  }

  return children;
}