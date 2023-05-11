import Routes from "./router/Routes"
import MovieProvider from "./context/Movies/MovieProvider"

function App() {
  return (
    <MovieProvider>
      <Routes />
    </MovieProvider>
  )
}

export default App
