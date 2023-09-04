import { apiUrls } from '@/constants'
import { axios } from '@/lib/axios'

import type { AuthUser, GetUserResponse } from '../types'

export const getUser = async () => {
  const { data } = await axios.get<GetUserResponse>(apiUrls.user.me)
  return {
    ...data,
    role: data.role.name,
  } as AuthUser
}
