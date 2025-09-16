import React from 'react'
import { useAuth } from '../auth/AuthContext.jsx'

function AuthButtons() {
  const { user, signInWithGoogle, logout, loading } = useAuth()

  if (loading) {
    return <div className="auth-buttons"><span>...</span></div>
  }

  if (!user) {
    return (
      <div className="auth-buttons">
        <button className="btn btn-outline" onClick={() => window.appState.setPage('login')}>Login</button>
        <button className="btn btn-primary" onClick={() => window.appState.setPage('signup')}>Sign Up</button>
      </div>
    )
  }

  return (
    <div className="auth-buttons" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {user.photoURL && (
        <img src={user.photoURL} alt="avatar" style={{ width: 32, height: 32, borderRadius: '50%' }} />
      )}
      <span style={{ fontSize: 14 }}>{user.displayName || user.email}</span>
      <button className="btn btn-outline" onClick={logout}>Logout</button>
    </div>
  )
}

export default AuthButtons