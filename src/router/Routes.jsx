import { Route, Routes as Redirect, BrowserRouter } from "react-router-dom"
import Home from "../views/Home"
import Layout from "../components/Layout"

export default function Routes() {
  return(
    <BrowserRouter>
      <Layout>
        <Redirect>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Home />} />
        </Redirect>
      </Layout>
    </BrowserRouter>
  )
}