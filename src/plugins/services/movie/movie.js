import axios from "axios";

const conectMovie = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN_AUTHORIZATION}`
  }
})

export default conectMovie