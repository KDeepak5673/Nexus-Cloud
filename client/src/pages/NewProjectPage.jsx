import React, { useState } from 'react'

function NewProjectPage() {
  const [repoUrl, setRepoUrl] = useState('')
  const [error, setError] = useState('')

  const handleDeploy = (e) => {
    e.preventDefault()
    setError('')
    if (!repoUrl || !/^https?:\/\/github\.com\//i.test(repoUrl)) {
      setError('Please enter a valid GitHub repository URL (e.g., https://github.com/user/repo).')
      return
    }
    // TODO: Hook up actual deployment flow
    alert('Deployment started for: ' + repoUrl)
  }

  return (
    <section className="container" style={{ padding: '40px 0', maxWidth: 720 }}>
      <button
        className="btn btn-outline"
        onClick={() => window.appState.setPage('dashboard')}
        style={{ marginBottom: 16 }}
      >
        ← Back to Projects
      </button>

      <h2 style={{ marginTop: 8 }}>New Project</h2>
      <p style={{ color: '#666' }}>Deploy your project by pasting your GitHub repository URL below.</p>

      <form onSubmit={handleDeploy} style={{ marginTop: 16 }}>
        <label style={{ display: 'block' }}>
          <div style={{ marginBottom: 8 }}>GitHub Repository URL</div>
          <input
            type="url"
            placeholder="https://github.com/username/repository"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </label>
        {error && (
          <div style={{ color: 'red', fontSize: 14, marginTop: 8 }}>{error}</div>
        )}
        <button className="btn btn-primary" type="submit" style={{ marginTop: 12 }}>
          Deploy
        </button>
        <div style={{ fontSize: 13, color: '#777', marginTop: 8 }}>
          Paste the public GitHub repository link. We will clone and build your project.
        </div>
      </form>
    </section>
  )
}

export default NewProjectPage


