import { ROLES } from '@/lib/authorization'

export type GetUserResponse = {
  bio: string
  email: string
  firstName: string
  id: string
  lastName: string
  role: {
    name: ROLES
  }
  teamId: string
}

export type AuthUser = {
  bio: string
  email: string
  firstName: string
  id: string
  lastName: string
  role: ROLES
}

export type UserResponse = {
  jwt: string
  user: AuthUser
}
