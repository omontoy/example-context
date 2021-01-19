import { AuthContext } from '../store/AuthContext'
import { useContext } from 'react'

function Button() {
  const auth = useContext(AuthContext)

  return (
    <button
      type="button"
      onClick={auth.handleLogin}
    >
      Login      
    </button>
  )
}

export default Button
