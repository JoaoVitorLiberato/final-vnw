
import { Container } from "./styles"
import { SupabaseContext } from "../../context/Supabase/supabase"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


export default function AreaClient() {
  const auth = useContext(SupabaseContext)
  const navigation = useNavigate()

  const handleLougout = async () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    await auth.logout()
    navigation("/login")
    return true
  }

  return(    
    <Container>
        <h1>Area do clinete</h1>
        <button onClick={handleLougout}>
          sair
        </button>
    </Container>
  )
}