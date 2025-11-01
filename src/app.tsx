import NavBar from "./assets/components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./assets/Routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;