import { axios } from '@/lib/axios'

import { AuthUser, GetUserResponse } from '../types'

export const getUser = async () => {
  const { data } = await axios.get<GetUserResponse>('/users/me?populate=*')
  return {
    ...data,
    role: data.role.name,
  } as AuthUser
}
