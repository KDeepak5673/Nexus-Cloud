import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import AnalyticsPage from './pages/AnalyticsPage'

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
        return <DashboardPage />
      case 'analytics':
        return <AnalyticsPage />
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