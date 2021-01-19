import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState('')
  const [ title, setTitle ] = useState('Junior Developer')

  const handleLogin = () => {
    setIsAuthenticated(true)
    setCurrentUser('Orlando')
    setTitle('Sr Developer')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        title,
        handleLogin
      }}
    > 
      {children}
    </AuthContext.Provider>
  )
}