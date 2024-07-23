import React from 'react'
import { Link } from 'react-router-dom';
import DashboardHeader from '../Components/DashboardHeader/DashboardHeader.jsx';
import DashboardProfileSection from '../Components/DashboardProfileSection/DashboardProfileSection.jsx';
import FoodPantryDashboardButtons from '../Components/FoodPantryDashboardButtons/FoodPantryDashboardButtons.jsx';
import FoodAvailableHeader from '../Components/FoodAvailableHeader/FoodAvailableHeader.jsx';
import FoodCard from '../Components/FoodCard/FoodCard.jsx';
import './FoodPantryDashboard.css';

const FoodPantryDashboard = () => {
  return (
    <>
    <div className="wholePage">
        {/* leftColumn refers to the sidebar */}
        <div className="leftColumn">
            <DashboardProfileSection />
            <Link to="/edit-profile-page">Edit Profile</Link>
            <FoodPantryDashboardButtons/>
        </div>
        <div className="rightColumn">
            <DashboardHeader />
            <Link to="/">Back to Home</Link>
            <FoodAvailableHeader />
            <FoodCard />
        </div>
    </div>
  </>
  )
}

export default FoodPantryDashboard