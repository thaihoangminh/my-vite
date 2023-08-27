import { apiUrls } from '@/constants'
import { axios } from '@/lib/axios'

import { UserResponse } from '../types'

export type LoginCredentialsDTO = {
  identifier: string
  password: string
}

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO) =>
  axios.post<UserResponse>(apiUrls.auth.login, data).then((res) => res.data)
