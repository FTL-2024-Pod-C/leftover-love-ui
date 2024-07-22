import React from 'react'
import { Link } from 'react-router-dom';
import "./RestaurantDashboardButtons.css";
import {useNavigate} from "react-router-dom"

const RestaurantDashboardButtons = (props) => {
    const navigate = useNavigate();
    return (
    <div className='buttonBox'>
        <div className="allButtons">
        {/* Routing of buttons */}
        
        <button className="dashboardButton" onClick={()=> navigate(`/restaurant-dashboard/${props.restaurant.username}`)}>Dashboard</button>
        
        <Link to="/restaurant-profile">
            <button className="dashboardButton">View Profile</button>
        </Link>
        <Link to="/add-listing">
            <button className="dashboardButton" restaurant={props.restaurant}>Add Listing</button>
        </Link>
        <Link to="/dontation-history">
            <button className="dashboardButton">Donation History</button>
        </Link>
        </div>
    </div>
  )
}

export default RestaurantDashboardButtons