import { createContext } from 'react'

import { AuthProps } from '@/contexts/auth/auth.type.ts'

export const AuthContext = createContext<AuthProps | null>(null)
