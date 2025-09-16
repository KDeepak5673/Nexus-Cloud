import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthChange, logout, signInWithGoogle, signupWithEmail, loginWithEmail } from './firebase'

const AuthContext = createContext({ user: null })

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Listen for auth changes
    const unsub = onAuthChange((u) => {
      setUser(u)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const value = {
    user,
    loading,
    signInWithGoogle,
    signupWithEmail,
    loginWithEmail,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}