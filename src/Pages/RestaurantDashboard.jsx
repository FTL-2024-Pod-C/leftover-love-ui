import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useRestaurant } from "../context/RestaurantContext";
import DashboardHeader from "../Components/DashboardHeader/DashboardHeader";
import DashboardProfileSection from "../Components/DashboardProfileSection/DashboardProfileSection";
import RestaurantDashboardButtons from "../Components/RestaurantDashboardButtons/RestaurantDashboardButtons";
import RestaurantDashboardMain from "../Components/RestaurantDashboardMain/RestaurantDashboardMain";
import "./RestaurantDashboard.css";

const DEV_BASE_URL = "http://localhost:3000";

const RestaurantDashboard = () => {
  const { username } = useParams();
  const { restaurant, setRestaurant } = useRestaurant();
  const [listings, setListings] = useState([]);
  const [idReceived, setIdReceived] = useState(false);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  useEffect(() => {
    if (idReceived) {
      fetchListings();
    }
  }, [idReceived]);

  const fetchRestaurant = async () => {
    try {
      const url = `${DEV_BASE_URL}/restaurants/restaurantusername/${username}`;
      const response = await axios.get(url);
      setRestaurant(response.data);
      setIdReceived(true);
    } catch (error) {
      console.error("Error fetching restaurant", error);
    }
  };

  const fetchListings = async () => {
    try {
      if (restaurant?.id) {
        const url = `${DEV_BASE_URL}/listings/restaurant/${restaurant.id}`;
        const response = await axios.get(url);
        setListings(response.data);
      }
    } catch (error) {
      console.error("Error fetching restaurant listings", error);
    }
  };

  const addNewListing = async (newListing) => {
    try {
      const url = `${DEV_BASE_URL}/restaurants/${restaurant.id}/listings`;
      const response = await axios.post(url, newListing);
      setListings([...listings, response.data]);
    } catch (error) {
      console.error("Error creating a new listing", error);
    }
  };

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  return (
    <div className="wholePage">
      <div className="leftColumn">
        <DashboardProfileSection name={restaurant.name} />
        <RestaurantDashboardButtons addNewListing={addNewListing} />
      </div>
      <div className="rightColumn">
        <DashboardHeader />
        <RestaurantDashboardMain listings={listings} />
      </div>
    </div>
  );
};

export default RestaurantDashboard;
