import { AuthContext } from '../hooks/use-auth-context'
import { supabase } from '../supabase'
import type { Session } from '@supabase/supabase-js'
import { PropsWithChildren, useEffect, useState } from 'react'

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)


  // Fetch the session once, and subscribe to auth state changes
  useEffect(() => {
    const fetchSession = async () => {
      setIsLoading(true)

      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()

      if (error) {
        console.error('Error fetching session:', error)
      }

      setSession(session)
      setIsLoading(false)
    }

    fetchSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state changed:', { event: _event, session })
      setSession(session)
    })

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Fetch the profile when the session changes
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true)

      if (session) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        setProfile(data)
      } else {
        setProfile(null)
      }

      setIsLoading(false)
    }

    fetchProfile()
  }, [session])

  // ------------------------------------
  // Sign Up
  // ------------------------------------
  async function signUp(email: string, password: string): Promise<boolean> {
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return false;
    }

    const user = data.user ?? data.session?.user;

    if (!user) {
      setError("Supabase did not return a user ID after signup.");
      return false;
    }

    // Create profile row
    const { error: insertError } = await supabase.from('profiles').insert({
      id: user.id,
      email,
      created_at: new Date(),
    });

    if (insertError) {
      setError(insertError.message);
      return false;
  }

  return true;
  }

  // ------------------------------------
  // Sign In
  // ------------------------------------
  const signIn = async (email: string, password: string) => {
    setError(null)

    const response = await supabase.auth.signInWithPassword({ email, password })
    
    if (response.error) {
      setError(response.error.message)
      return false
    }

    setSession(response.data?.session ?? null)
    return true
  }

  // ------------------------------------
  // Sign Out
  // ------------------------------------
  const signOut = async () => {
    setError(null)
    const { error } = await supabase.auth.signOut()
    if (error) setError(error.message)
  }

  

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoading,
        profile,
        isLoggedIn: session !== null,
        signUp,
        signIn,
        signOut,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}