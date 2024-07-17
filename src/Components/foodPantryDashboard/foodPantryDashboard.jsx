import React from 'react'
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardHeader from '../dashboardHeader/dashboardHeader.jsx';
import DashboardProfileSection from '../dashboardProfileSection/dashboardProfileSection.jsx';
import FoodPantryDashboardButtons from '../foodPantryDashboardButtons/foodPantryDashboardButtons.jsx';
import FoodAvailableHeader from '../foodAvailableHeader/foodAvailableHeader.jsx';
import FoodCard from '../foodCard/foodCard.jsx';
import './foodPantryDashboard.css';

const FoodPantryDashboard = () => {
  return (
    <>
    <Router>
    <div className="wholePage">
        {/* leftColumn refers to the sidebar */}
        <div className="leftColumn">
            <DashboardProfileSection />
            <Routes>
            {/* Routes "editProfilePage" to editProfilePage */}
            <Route path="/editProfilePage" element={<editProfilePage />} />
            </Routes>
            <FoodPantryDashboardButtons/>
        </div>
        <div className="rightColumn">
            <DashboardHeader />
            <Routes>
            {/* Routes "landingPage" to landingPage */}
            <Route path="/landingPage" element={<landingPage />} />
            </Routes>
            <FoodAvailableHeader />
            <FoodCard />
        </div>
    </div>
    </Router>
  </>
  )
}

export default FoodPantryDashboard