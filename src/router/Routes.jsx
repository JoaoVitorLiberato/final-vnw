import { Route, Routes as Redirect, BrowserRouter } from "react-router-dom"
import Home from "../views/Home"
import Layout from "../components/Layout"
import Login from "../views/Login"
import Signup from "../views/Signup"

export default function Routes() {
  return(
    <BrowserRouter>
      <Redirect>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/filmes" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Signup />} />
      </Redirect>
    </BrowserRouter>
  )
}