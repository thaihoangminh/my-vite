import { useMutation } from '@tanstack/react-query'

import { useUser } from '@/lib/auth'
import { axios } from '@/lib/axios'
import { MutationConfig } from '@/lib/react-query'
import { useNotificationStore } from '@/stores/notifications'

export type UpdateProfileDTO = {
  data: {
    email: string
    firstName: string
    lastName: string
    bio: string
  }
}

export const updateProfile = ({ data }: UpdateProfileDTO) => {
  return axios.patch(`/users/profile`, data)
}

type UseUpdateProfileOptions = {
  config?: MutationConfig<typeof updateProfile>
}

export const useUpdateProfile = ({ config }: UseUpdateProfileOptions = {}) => {
  const { addNotification } = useNotificationStore()
  const { refetch } = useUser()
  return useMutation({
    onSuccess: async () => {
      addNotification({
        type: 'success',
        title: 'User Updated',
      })
      await refetch()
    },
    ...config,
    mutationFn: updateProfile,
  })
}
