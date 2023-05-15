
import { useContext } from "react"
import LayoutPrivate from "../../components/Layout/Private"
import { Container } from "./styles"
import { SupabaseContext } from "../../context/Supabase/supabase"


export default function AreaClient() {
  const { user } = useContext(SupabaseContext)

  return(    
      <LayoutPrivate>
        <Container>
            <h3>O cliente { user.client.email } está logado! </h3>
        </Container>
      </LayoutPrivate>
  )
}