import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { UserStorage } from './assets/Services/Storage/UserStorage'

const user = UserStorage.getUser()


console.log("usuario logeado: " + JSON.stringify(user));



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <App/>
  </StrictMode>,
)