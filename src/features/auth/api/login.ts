import { axios } from '@/lib/axios'

import { UserResponse } from '../types'

export type LoginCredentialsDTO = {
  identifier: string
  password: string
}

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO) =>
  axios.post<UserResponse>('/auth/local', data).then((res) => res.data)
