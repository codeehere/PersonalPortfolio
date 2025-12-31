import { useState } from 'react'
import './App.css'

import DscCompo from './components/DscCompo'
import MainScreen from './components/MainScreen'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-layout">
      {/* Hamburger Menu Button */}
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <div className={`bar ${isSidebarOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isSidebarOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isSidebarOpen ? 'open' : ''}`}></div>
      </button>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <DscCompo />
      </aside>
      <main className="content-wrapper">
        <MainScreen />
      </main>
    </div>
  )
}

export default App
