import { ReactNode } from 'react'

import { UserRole } from '@/features/auth'
import { useAuthorization } from '@/hooks/use-authorization'

type AuthorizationProps = {
  forbiddenFallback?: ReactNode
  children: ReactNode
} & (
  | {
      allowedRoles: Array<UserRole>
      policyCheck?: never
    }
  | {
      allowedRoles?: never
      policyCheck: boolean
    }
)

export const Authorization = ({
  policyCheck,
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization()

  let canAccess = false

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles })
  }

  if (typeof policyCheck !== 'undefined') {
    canAccess = policyCheck
  }

  return <>{canAccess ? children : forbiddenFallback}</>
}
