import { useQuery } from '@tanstack/react-query'

import { UserRole } from '@/features/auth'
import { axios } from '@/lib/axios'
import { BaseEntity } from '@/types'

import { User } from '../types'

type GetUsersResponse = {
  firstName: string
  lastName: string
  email: string
  role: { name: UserRole }
  teamId: string
  bio: string
} & BaseEntity

export const getUsers = async () => {
  const response = await axios.get<Array<GetUsersResponse>>('/users?populate=role')
  return response.data
}

const mapUsersWithRole = (users: Array<GetUsersResponse>): Array<User> =>
  users.map((user) => ({ ...user, role: user.role.name }))

export const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    select: mapUsersWithRole,
  })
