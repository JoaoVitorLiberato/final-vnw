/* eslint-disable react/prop-types */
import Login from "../../views/Login"

const SupabaseAuth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const token = localStorage.getItem("token")

  if(!token && !user) {
    return <Login />
  } else {
    return<>{children}</>
  }
}

export default SupabaseAuth