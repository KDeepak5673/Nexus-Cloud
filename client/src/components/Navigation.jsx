import React from 'react'
import AuthButtons from './AuthButtons.jsx'

function Navigation({ currentPage }) {
  return (
    <header className="nav-header">
      <div className="container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">Nexus Cloud</div>
          <ul className="nav-menu">
            <li><a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={() => window.appState.setPage('home')}>Home</a></li>
            <li><a href="#" className={currentPage === 'dashboard' ? 'active' : ''} onClick={() => window.appState.setPage('dashboard')}>Dashboard</a></li>
            <li><a href="#" className={currentPage === 'analytics' ? 'active' : ''} onClick={() => window.appState.setPage('analytics')}>Analytics</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Templates</a></li>
          </ul>
          <AuthButtons />
        </nav>
      </div>
    </header>
  )
}

export default Navigation