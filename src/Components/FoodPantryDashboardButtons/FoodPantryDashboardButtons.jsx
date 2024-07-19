import React from 'react'
import { Link } from 'react-router-dom';
import "./FoodPantryDashboardButtons.css";

const FoodPantryDashboardButtons = () => {
  return (
    <div className='buttonBox'>
        <div className="allButtons">
        {/* Routing of buttons */}
        <Link to="/food-dashboard">
            <button className="dashboardButton">Dashboard</button>
        </Link>
        <Link to="/food-profile">
            <button className="dashboardButton">View Profile</button>
        </Link>
        <Link to="/restaurant-list">
            <button className="dashboardButton">Restaurant List</button>
        </Link>
        </div>
    </div>
  )
}

export default FoodPantryDashboardButtons