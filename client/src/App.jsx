import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import AnalyticsPage from './pages/AnalyticsPage'
import RequireAuth from './components/RequireAuth.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import NewProjectPage from './pages/NewProjectPage.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    window.appState = {
      setPage: (page) => {
        setCurrentPage(page)
        window.scrollTo(0, 0)
      }
    }
  }, [])

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return (
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        )
      case 'new-project':
        return (
          <RequireAuth>
            <NewProjectPage />
          </RequireAuth>
        )
      case 'analytics':
        return (
          <RequireAuth>
            <AnalyticsPage />
          </RequireAuth>
        )
      case 'login':
        return <LoginPage />
      case 'signup':
        return <SignupPage />
      default:
        return <HomePage />
    }
  }

  return (
    <>
      <Navigation currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App