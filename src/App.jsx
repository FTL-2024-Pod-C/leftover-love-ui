import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import dashboardHeader from './dashboardHeader';
import './App.css';

const App = () => {
  return (
  <>
    <div>Hi from the frontend!</div>

    // Routing for buttons
    <Router>
    <div className="App">
      <dashboardHeader />
      <Routes>
      // Routes "landingPage" to landingPage
      <Route path="/landingPage" element={<landingPage />} />
      </Routes>
    </div>
    </Router>
  </>
  )
}

export default App;