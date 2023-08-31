import { useCallback } from 'react'

import { UserRole } from '@/features/auth'
import { useUser } from '@/lib/auth'

export const useAuthorization = () => {
  const { user } = useUser()

  if (!user) {
    throw Error('User does not exist!')
  }

  const { role } = user

  const checkAccess = useCallback(
    ({ allowedRoles }: { allowedRoles: Array<UserRole> }) => {
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles?.includes(role)
      }

      return true
    },
    [role]
  )

  return { checkAccess, role }
}
