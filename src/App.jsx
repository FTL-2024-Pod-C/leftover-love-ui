import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from './Components/dashboardHeader/dashboardHeader.jsx';
import './App.css';

const App = () => {
  return (
  <>
    <Router>
    <div className="App">
      <DashboardHeader />
      <Routes>
      {/* Routes "landingPage" to landingPage */}
      <Route path="/landingPage" element={<landingPage />} />
      </Routes>
    </div>
    </Router>
  </>
  )
}

export default App;