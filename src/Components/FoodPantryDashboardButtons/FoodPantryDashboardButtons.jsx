import React from 'react'
import { Link } from 'react-router-dom';
import "./FoodPantryDashboardButtons.css";

const FoodPantryDashboardButtons = ({foodPantry, allRestaurants}) => {
  return (
    <div className='buttonBox'>
        <div className="allButtons">
        {/* Routing of buttons */}
        {/* <Link to="/edit-profile" state={{foodPantry}}>
          <button className="edit-profile-btn">Edit Profile</button>
        </Link> */}
        <Link to="/edit-profile-food" state={{foodPantry}}>
          <button className="dashboardButton">Edit Profile</button>
        </Link>
        
        <Link to="/food-profile" state={{foodPantry}}>
            <button className="dashboardButton">View Profile</button>
        </Link>
        <Link to="/restaurant-list" state={{foodPantry, allRestaurants}}>
            <button className="dashboardButton">Restaurant List</button>
        </Link>
        <Link to="/food-request">
            <button className="dashboardButton">Requests</button>
        </Link>
        </div>
    </div>
  )
}

export default FoodPantryDashboardButtons