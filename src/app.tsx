import NavBar from "./assets/components/NavBar/NavBar";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRouter } from "./assets/Routes/AppRouter";

function AppContent() {
  const location = useLocation();
  const hideNav = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNav && <NavBar />}
      <AppRouter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;