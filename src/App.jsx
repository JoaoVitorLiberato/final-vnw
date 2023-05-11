import Routes from "./router/Routes"
import MovieProvider from "./context/Movies/MovieProvider"
import SupabaseProvider from "./context/Supabase/supabaseProvider"

function App() {
  return (
    <SupabaseProvider>
      <MovieProvider>
        <Routes />
      </MovieProvider>
    </SupabaseProvider>
  )
}

export default App
