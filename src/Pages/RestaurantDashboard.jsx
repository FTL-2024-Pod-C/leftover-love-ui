import React from 'react'
import DashboardHeader from '../Components/DashboardHeader/DashboardHeader.jsx';
import DashboardProfileSection from '../Components/DashboardProfileSection/DashboardProfileSection.jsx';
import RestaurantDashboardButtons from '../Components/RestaurantDashboardButtons/RestaurantDashboardButtons.jsx';
import RestaurantDashboardMain from '../Components/RestaurantDashboardMain/RestaurantDashboardMain.jsx';
import './RestaurantDashboard.css';

const RestaurantDashboard = () => {
  return (
    <>
    <div className="wholePage">
        {/* leftColumn refers to the sidebar */}
        <div className="leftColumn">
            <DashboardProfileSection />
            <RestaurantDashboardButtons />
        </div>
        <div className="rightColumn">
            <DashboardHeader />
            <RestaurantDashboardMain />
        </div>
    </div>
  </>
  )
}

export default RestaurantDashboard