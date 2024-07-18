import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx'
import MeetTheCreatorsPage from './Pages/MeetTheCreatorsPage';
import SignUpPage from './Pages/SignUpPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import FoodPantryDashboard from './Pages/FoodPantryDashboard.jsx';
import RestaurantDashboard from './Pages/RestaurantDashboard.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/meet-the-creators" element={<MeetTheCreatorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/food-dashboard" element={<RestaurantDashboard />} />
          <Route path="/editProfilePage" element={<editProfilePage />} />
          {/* Other routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;