import { Route, Routes } from "react-router-dom"
import Home from "./assets/pages/home/home"
import Products from "./assets/pages/product/product"
import Cart from "./assets/pages/Shopping-Cart/Shopping-Cart"
import Login from "./assets/pages/Login/Login"



function App(){

    return(
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/Productos" element={<Products/>}/>
          <Route path="/Carrito" element={<Cart/>}/>
          
        </Routes>
    )

}


export default App