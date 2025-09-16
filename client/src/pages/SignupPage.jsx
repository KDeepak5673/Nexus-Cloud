import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext.jsx'

function SignupPage() {
  const { signupWithEmail, signInWithGoogle } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      await signupWithEmail(email, password)
      window.appState.setPage('dashboard')
    } catch (err) {
      setError(err.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container" style={{ padding: '40px 0', maxWidth: 500 }}>
      <h2>Sign Up</h2>
      <p>Create your account</p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        <label>
          <div>Email</div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          <div>Password</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          <div>Confirm Password</div>
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
        </label>
        {error && <div style={{ color: 'red', fontSize: 14 }}>{error}</div>}
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Create account'}
        </button>
      </form>

      <div style={{ marginTop: 16 }}>
        <button className="btn btn-outline" onClick={signInWithGoogle}>Continue with Google</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <a href="#" onClick={() => window.appState.setPage('login')}>Already have an account? Log in</a>
      </div>
    </section>
  )
}

export default SignupPage