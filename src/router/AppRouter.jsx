import { Route, Routes } from "react-router-dom"
import { Home } from "../principal/page/Home"
import { Form, Login } from "../auth/page"

export const AppRouter = () => {
  return (
    <>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Registro" element={<Form/>}/>
            </Routes>
        </div>
    </>
  )
}
