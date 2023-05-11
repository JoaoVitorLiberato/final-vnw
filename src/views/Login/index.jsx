
import { Container, Content, Form } from "./styles"
import Button from '@mui/material/Button';
import { useState, useContext } from "react"
import { SupabaseContext } from "../../context/Supabase/supabase";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const auth = useContext(SupabaseContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { email, password } = form

      if(email === undefined || ( password === undefined || password.length < 8 )) return false

      await auth.signin(email, password)

      if(pathname === "/auth/adm") {
        navigate(0)
      } else {
        navigate("/auth/adm")
      }

      return true
    } catch (error) {
      console.log(error.message)
      return false
    }
  }

  return(
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <div
          className="text-fields"
          >
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            required
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div
          className="text-fields"
          >
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            required
            min={8}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <Content>
          <Button 
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={form.email === '' || form.password === ''}
          >
            Login
          </Button>
          <Link
            to={"/cadastrar"}
          >
            Cadastrar
          </Link>
        </Content>
      </Form>
    </Container>
  )
}