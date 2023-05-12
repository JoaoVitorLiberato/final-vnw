import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL
const TOKEN_AUTHORIZATION = import.meta.env.VITE_TOKEN_AUTHORIZATION

const conectMovie = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN_AUTHORIZATION}`
  }
})

export default conectMovie