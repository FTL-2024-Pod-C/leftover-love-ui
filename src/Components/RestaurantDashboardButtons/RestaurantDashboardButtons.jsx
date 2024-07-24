import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useRestaurant } from "../context/RestaurantContext";
import { useRestaurant } from "../../context/RestaurantContext";
import "./RestaurantDashboardButtons.css";

const RestaurantDashboardButtons = ({ addNewListing }) => {
  const { restaurant } = useRestaurant();
  const navigate = useNavigate();

  console.log("restaurant in RDB is: ", restaurant);

  return (
    <div className="buttonBox">
      <div className="allButtons">
        <button
          className="dashboardButton"
          onClick={() =>
            navigate(`/restaurant-dashboard/${restaurant.username}`)
          }
        >
          Dashboard
        </button>

        <Link to="/restaurant-profile">
          <button className="dashboardButton">View Profile</button>
        </Link>

        <Link to="/add-listing">
          <button className="dashboardButton">Add Listing</button>
        </Link>

        <Link to="/donation-history">
          <button className="dashboardButton">Donation History</button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantDashboardButtons;
