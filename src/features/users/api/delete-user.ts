import { useMutation } from '@tanstack/react-query'

import { axios } from '@/lib/axios'
import { queryClient } from '@/lib/react-query'
import { useNotificationStore } from '@/stores/notifications'

import { User } from '../types'

export type DeleteUserDTO = {
  userId: string
}

export const deleteUser = async ({ userId }: DeleteUserDTO) => {
  const result = await axios.delete<User>(`/users/${userId}`)
  return result.data
}

export const useDeleteUser = () => {
  const { addNotification } = useNotificationStore()

  return useMutation({
    onMutate: async (deletedUser) => {
      await queryClient.cancelQueries(['users'])

      const previousUsers = queryClient.getQueryData<Array<User>>(['users'])

      queryClient.setQueryData(
        ['users'],
        previousUsers?.filter((user) => user.id !== deletedUser.userId)
      )

      return { previousUsers }
    },
    onError: (_, __, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(['users'], context.previousUsers)
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['users'])
      addNotification({
        type: 'success',
        title: 'User Deleted',
      })
    },
    mutationFn: deleteUser,
  })
}
