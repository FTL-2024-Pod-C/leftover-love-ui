import React from 'react'
import DashboardHeader from '../Components/DashboardHeader/DashboardHeader.jsx';
import DashboardProfileSection from '../Components/DashboardProfileSection/DashboardProfileSection.jsx';
import RestaurantDashboardButtons from '../Components/RestaurantDashboardButtons/RestaurantDashboardButtons.jsx';
import RestaurantDashboardMain from '../Components/RestaurantDashboardMain/RestaurantDashboardMain.jsx';
import './RestaurantDashboard.css';

import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";

const DEV_BASE_URL = "http://localhost:3000"

const RestaurantDashboard = () => {
  const {username} = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [listings, setListings] = useState([]);

  

  useEffect (() => {
    fetchRestaurant();
    fetchListings();
  }, []);

  const fetchRestaurant = async () => {
    try {
      // console.log(username);
      const url = `${DEV_BASE_URL}/restaurants/restaurantusername/${username}`;
      const response = await axios.get(url);
      // console.log(response.data);
      setRestaurant(response.data);
    }
    catch (error) {
      console.error("Error fetching restaurant", error);
    }
  }
  // console.log(restaurant.id);

  const fetchListings = async () => {
    try {
      if (restaurant.id) {
        const url = `${DEV_BASE_URL}/listings/restaurant/${restaurant.id}`;
        const response = await axios.get(url);
        // console.log(response.data);
        setListings(response.data);
      }
    }
    catch (error) {
      console.error("Error fetching restaurant listings", error);
    }
  }
  
  return (
    <>
    <div className="wholePage">
        {/* leftColumn refers to the sidebar */}
        <div className="leftColumn">
            <DashboardProfileSection 
              name={restaurant.name}
            />
            <RestaurantDashboardButtons 
              restaurant={restaurant}
            />
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