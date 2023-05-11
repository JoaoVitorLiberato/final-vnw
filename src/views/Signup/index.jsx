
import { Container, Content, Form } from "./styles"
import Button from '@mui/material/Button';
import { useState, useContext } from "react"
import { SupabaseContext } from "../../context/Supabase/supabase";
import { useNavigate, Link } from "react-router-dom";


export default function Signup() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: ''
  })

  const navigate = useNavigate()
  const auth = useContext(SupabaseContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { email, password, phone } = form 

      if([
        email === undefined,
        (password === undefined || password.length < 8 ),
        phone === undefined
      ].every(o => !!o)) {
        return;
      }

      await auth.register(email, password, phone)
      navigate("/login")
      return true

    } catch (error) {
      console.log(error.message)
      return false
    }
  }

  return(
    <Container>
      <h1>Cadastro</h1>
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
        <div
          className="text-fields"
          >
          <label htmlFor="tel">Phone</label>
          <input 
            type="tel"
            id="tel"
            required
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <Content>
          <Link to={"/login"}>
            Voltar para Login
          </Link>
          <Button 
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={form.email === '' || form.password === ''}
          >
            Cadastrar
          </Button>
        </Content>
      </Form>
    </Container>
  )
}