import { UserRole } from '@/features/auth'
import { BaseEntity } from '@/types'

export type User = {
  firstName: string
  lastName: string
  email: string
  role: UserRole
  teamId: string
  bio: string
} & BaseEntity
