/* eslint-disable react/prop-types */
import { SupabaseContext } from "./supabase"
import { useEffect, useState } from "react"
import { supabaseRequests } from "../../plugins/services/supabase/requests"
import supabase from "../../plugins/services/supabase/supabase"

const SupabaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { login, signup } = supabaseRequests()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session)
      setUser(session?.user || null)
    })
  }, [setUser])

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

  return(
    <SupabaseContext.Provider value={{ user, signin, register }}>
      { children }
    </SupabaseContext.Provider>
  )
}

export default SupabaseProvider