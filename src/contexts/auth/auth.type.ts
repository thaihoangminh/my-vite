export type UserLogin = {
  username: string
  password: string
}

export type User = {
  username: string
  name: string
}

export type AuthProps = {
  isAuthenticated: boolean
  user: User
  logout: () => void
  login: () => void
}
