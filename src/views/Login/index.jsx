
import { Container, Content, Form } from "./styles"
import Button from '@mui/material/Button';
import { useState, useContext } from "react"
import { SupabaseContext } from "../../context/Supabase/supabase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)


  const { pathname } = useLocation()
  const navigate = useNavigate()
  const auth = useContext(SupabaseContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const { email, password } = form

      if(email === "" || ( password === "" || password.length < 8 )) return;

      await auth.signin(email, password)
      setTimeout(() => {
        setLoading(false)
        if(pathname === "/auth/adm") {
          navigate(0)
        } else {
          navigate("/auth/adm")
        }
      }, 1500)
      return true
    } catch (error) {
      setLoading(false)
      console.log(error)
      return false
    }
  }

  return(
    <Container>
      <h2>Login</h2>
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
            {
              loading ?  <CircularProgress color="warning" size={20}/> : 'Login'
            }
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