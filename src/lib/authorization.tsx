import { ReactNode } from 'react'

import { useAuthorization } from '@/hooks/use-authorization'

export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type RoleTypes = keyof typeof ROLES

type AuthorizationProps = {
  forbiddenFallback?: ReactNode
  children: ReactNode
} & (
  | {
      allowedRoles: RoleTypes[]
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
