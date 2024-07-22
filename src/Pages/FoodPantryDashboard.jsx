import React from 'react'
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
            <FoodPantryDashboardButtons/>
        </div>
        <div className="rightColumn">
            <DashboardHeader />
            <FoodAvailableHeader />
            <FoodCard />
        </div>
    </div>
  </>
  )
}

export default FoodPantryDashboard