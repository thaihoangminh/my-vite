import { useCallback } from 'react'

import { useUser } from '@/lib/auth'
import { RoleTypes } from '@/lib/authorization'

export const useAuthorization = () => {
  const { user } = useUser()

  if (!user) {
    throw Error('User does not exist!')
  }

  const { role } = user

  const checkAccess = useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles?.includes(role)
      }

      return true
    },
    [role]
  )

  return { checkAccess, role }
}
