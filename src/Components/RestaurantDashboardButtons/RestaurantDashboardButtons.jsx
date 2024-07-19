import React from 'react'
import { Link } from 'react-router-dom';
import "./RestaurantDashboardButtons.css";

const RestaurantDashboardButtons = () => {
  return (
    <div className='buttonBox'>
        <div className="allButtons">
        {/* Routing of buttons */}
        <Link to="/restaurant-dashboard">
            <button className="dashboardButton">Dashboard</button>
        </Link>
        <Link to="/restaurant-profile">
            <button className="dashboardButton">View Profile</button>
        </Link>
        <Link to="/add-listing">
            <button className="dashboardButton">Add Listing</button>
        </Link>
        <Link to="/dontation-history">
            <button className="dashboardButton">Donation History</button>
        </Link>
        </div>
    </div>
  )
}

export default RestaurantDashboardButtons