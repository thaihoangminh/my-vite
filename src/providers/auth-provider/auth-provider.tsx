import { useState } from 'react'

import { AuthContext, AuthProps, User, UserLogin } from '@/contexts/auth'
import { AuthProviderProps } from '@/providers/auth-provider/auth-provider.type'

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (user: UserLogin) => {
    // TODO: fake login
    if (user.username === 'admin' && user.password === 'admin') {
      setIsAuthenticated(true)
      const user = { name: 'Thai Hoang', username: 'thai.hoang' }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  const logout = () => {
    // TODO: clean up
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  } as AuthProps

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
