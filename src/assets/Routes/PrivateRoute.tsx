import type { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const esVendedor = user?.typeuser === "Vendedor";

  const location = useLocation();
  const currentRoute = location.pathname;

 
  if (!user) {
    return <Navigate to="/login" replace />;
  }

 
  if ((currentRoute === "/gestion" || currentRoute.startsWith("/gestion/")) && !esVendedor) {
  return <Navigate to="/" replace />;
}

  return children;
}