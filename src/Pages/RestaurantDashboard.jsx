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
  const [restaurant, setRestaurant] = useState({});
  const [listings, setListings] = useState([]);
  const [idReceived, setIdReceived] = useState(false);

  
  useEffect (() => {
    fetchRestaurant();
    // fetchListings();
  }, []);

  useEffect (() => {
    fetchListings();
  }, [idReceived]);

  useEffect(() => {
    console.log("Listings updated:", listings);
  }, [listings]);
  

  const fetchRestaurant = async () => {
    try {
      const url = `${DEV_BASE_URL}/restaurants/restaurantusername/${username}`;
      console.log(url);
      const response = await axios.get(url);
      console.log(response.data);
      setRestaurant(response.data);
      setIdReceived(true);
    }
    catch (error) {
      console.error("Error fetching restaurant", error);
    }
  }

  const fetchListings = async () => {
    console.log("hereeeeeee")
    try {
      if (restaurant.id) {
        const url = `${DEV_BASE_URL}/listings/restaurant/${restaurant.id}`;
        console.log(url);
        const response = await axios.get(url);
        console.log(response.data);
        setListings(response.data);
        // console.log("listings",listings);
      }
      else{
        console.log("No id, id is: ", restaurant.id)
      }
    }
    catch (error) {
      console.error("Error fetching restaurant listings", error);
    }
  }

  const addNewListing = async () => {

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
            <RestaurantDashboardMain 
              listings={listings}
            />
        </div>
    </div>
  </>
  )
}

export default RestaurantDashboard