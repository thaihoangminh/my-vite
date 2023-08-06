import { useCallback } from 'react'

import { useUser } from '@/lib/auth'
import { RoleTypes } from '@/lib/authorization'

export const useAuthorization = () => {
  const { data } = useUser()

  if (!data) {
    throw Error('User does not exist!')
  }

  const checkAccess = useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles?.includes(data.role)
      }

      return true
    },
    [data.role]
  )

  return { checkAccess, role: data.role }
}
