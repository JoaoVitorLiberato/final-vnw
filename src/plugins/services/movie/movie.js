import axios from "axios";
import { API_URL, TOKEN_AUTHORIZATION } from "../../configs/config"


const conectMovie = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN_AUTHORIZATION}`
  }
})

export default conectMovie