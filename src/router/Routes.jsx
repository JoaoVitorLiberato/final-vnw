import { Route, Routes as Redirect } from "react-router-dom"
import Home from "../views/Home"
import LayoutPublic from "../components/Layout/Public"
import Login from "../views/Login"
import Signup from "../views/Signup"
import SupabaseAuth from "../context/Supabase/supabaseAuth"
import AreaClient from "../views/AreaCliente"


export default function Routes() {
  return(
    <Redirect>
      <Route path="/" 
        element={
          <LayoutPublic>
            <Home />
          </LayoutPublic>
        } 
      />
      <Route path="/filmes" 
        element={
          <LayoutPublic>
            <Home />
          </LayoutPublic>
        } 
      />
      <Route path="/series" 
        element={
          <LayoutPublic>
            <Home />
          </LayoutPublic>
        } 
      />
      <Route path="/login" element={
        <LayoutPublic>
          <Login />
        </LayoutPublic>
      } />
      <Route path="/cadastrar" element={<Signup />} />
      <Route path="/auth/adm" 
        element={
          <SupabaseAuth>
            <AreaClient />
          </SupabaseAuth>
        } 
      />
    </Redirect>
  )
}