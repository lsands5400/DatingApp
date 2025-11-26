import { Session } from '@supabase/supabase-js'
import { createContext, useContext } from 'react'

export type AuthData = {
  session?: Session | null
  profile?: any | null
  isLoading: boolean
  isLoggedIn: boolean
  signIn: (email: string, password: string) => Promise<boolean>
  signOut: () => Promise<void>
  error?: string | null
}

export const AuthContext = createContext<AuthData>({
  session: undefined,
  profile: undefined,
  isLoading: true,
  isLoggedIn: false,
  signIn: async (email: string, password: string) => true,
  signOut: async () => {},
  error: null,
})

export const useAuthContext = () => useContext(AuthContext)