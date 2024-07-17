import React from 'react'
import { Link } from 'react-router-dom';
import "./FoodPantryDashboardButtons.css";

const FoodPantryDashboardButtons = () => {
  return (
    <div className='buttonBox'>
        <div className="allButtons">
        {/* Routing of buttons */}
        <Link to="/foodPantryDashboard">
            <button className="dashboardButton">Dashboard</button>
        </Link>
        <Link to="/foodPantryProfilePage">
            <button className="dashboardButton">View Profile</button>
        </Link>
        <Link to="/restaurantList">
            <button className="dashboardButton">Restaurant List</button>
        </Link>
        </div>
    </div>
  )
}

export default FoodPantryDashboardButtons