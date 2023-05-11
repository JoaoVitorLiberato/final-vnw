import { Route, Routes as Redirect } from "react-router-dom"
import Home from "../views/Home"
import Layout from "../components/Layout"
import Login from "../views/Login"
import Signup from "../views/Signup"
import SupabaseAuth from "../context/Supabase/supabaseAuth"
import AreaClient from "../views/AreaClient"

export default function Routes() {
  return(
    <Redirect>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/filmes" element={<Layout><Home /></Layout>} />
      <Route path="/login" element={<Login />} />
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