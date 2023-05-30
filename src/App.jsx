import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import { Usuario } from "./Pages/Usuario"
import { Admin } from "./Pages/Admin"
import { AppContext } from "./context/AppContext"
import { Login } from "./Admin/Login/Login"
function App() {

  const { isAuth } = useContext(AppContext)
  console.log(isAuth)
  return (
    <>
    <Routes>
      <Route path="/iniciar-sesion"/>
    </Routes>
        {
          isAuth ? 
          <Routes>
            <Route path="/:id" element={<Admin/>}/>
          </Routes>
          : <Login/> 
        }
      {/* </Route> */}
      <Routes>
        <Route path="/products" element={<Usuario/>}/>
      </Routes>
    </>
  )
}

export default App
