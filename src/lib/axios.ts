import Axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

import { API_URL } from '@/config'
import { useNotificationStore } from '@/stores/notifications'
import storage from '@/utils/storage'

export const axios = Axios.create({
  baseURL: API_URL,
})

const onRequestSuccess = (config: InternalAxiosRequestConfig) => {
  const token = storage.getToken()
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`)
  }
  config.headers.set('Accept', 'application/json')
  return config
}

axios.interceptors.request.use(onRequestSuccess)
axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const message =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (error.response?.data.error?.message as string) || error.message

    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    })

    return Promise.reject(error)
  }
)

// export const nAxios = <T>(cfg: AxiosRequestConfig) => axios.request<any, T>(cfg)
