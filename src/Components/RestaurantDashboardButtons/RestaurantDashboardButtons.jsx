import React from 'react'
import { Link } from 'react-router-dom';
import "./RestaurantDashboardButtons.css";

const RestaurantDashboardButtons = () => {
  return (
    <div className='buttonBox'>
        <div className="allButtons">
        {/* Routing of buttons */}
        <Link to="/restaurantDashboard">
            <button className="dashboardButton">Dashboard</button>
        </Link>
        <Link to="/restaurantProfilePage">
            <button className="dashboardButton">View Profile</button>
        </Link>
        <Link to="/updateListings">
            <button className="dashboardButton">Update Listings</button>
        </Link>
        <Link to="/donationHistory">
            <button className="dashboardButton">Donation History</button>
        </Link>
        </div>
    </div>
  )
}

export default RestaurantDashboardButtons