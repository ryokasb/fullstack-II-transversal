import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const user = localStorage.getItem("user")

console.log("usuario logeado" + user)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <App/>
  </StrictMode>,
)