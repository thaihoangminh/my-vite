import { useQuery } from '@tanstack/react-query'

import { ROLES } from '@/lib/authorization'
import { axios } from '@/lib/axios'
import { BaseEntity } from '@/types'

import { User } from '../types'

type GetUsersResponse = {
  firstName: string
  lastName: string
  email: string
  role: { name: ROLES }
  teamId: string
  bio: string
} & BaseEntity

export const getUsers = async () => {
  const response = await axios.get<GetUsersResponse[]>('/users?populate=role')
  return response.data
}

const mapUsersWithRole = (users: GetUsersResponse[]): User[] =>
  users.map((user) => ({ ...user, role: user.role.name }))

export const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    select: mapUsersWithRole,
  })
