/* eslint-disable react/prop-types */
import { SupabaseContext } from "./supabase"
import { useEffect, useState } from "react"
import { supabaseRequests } from "../../plugins/services/supabase/requests"
import supabase from "../../plugins/services/supabase/supabase"

const SupabaseProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: '',
    user: []
  })
  const { login, signup, signout } = supabaseRequests()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(session !== null) {
        localStorage.setItem("token", session.access_token)
        localStorage.setItem("user", JSON.stringify(session.user))

        setUser({
          token: localStorage.getItem("token"),
          user: JSON.parse(localStorage.getItem("user"))
        })
      }
    })
  }, [])

  const signin = async (email, password) => {
    const response = await login(email, password)
    if (!response) return;
    return response
  }

  const register = async (email, password, phone) => {
    const response = await signup(email, password, phone)

    if(!response) return;

    return response
  }
  
  const logout = async () => {
    const response = await signout()
    return response
  }

  return(
    <SupabaseContext.Provider value={{ user, signin, register, logout }}>
      { children }
    </SupabaseContext.Provider>
  )
}

export default SupabaseProvider