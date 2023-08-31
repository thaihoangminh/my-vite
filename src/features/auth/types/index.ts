import { USER_ROLES } from '@/features/auth'

export type UserRole = keyof typeof USER_ROLES

export type GetUserResponse = {
  bio: string
  email: string
  firstName: string
  id: string
  lastName: string
  role: {
    name: UserRole
  }
  teamId: string
}

export type AuthUser = {
  bio: string
  email: string
  firstName: string
  id: string
  lastName: string
  role: UserRole
}

export type UserResponse = {
  jwt: string
  user: AuthUser
}
