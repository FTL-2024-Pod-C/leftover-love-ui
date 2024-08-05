import React from 'react'
import DashboardHeader from '../Components/DashboardHeader/DashboardHeader.jsx';
import DashboardProfileSection from '../Components/DashboardProfileSection/DashboardProfileSection.jsx';
import RestaurantDashboardButtons from '../Components/RestaurantDashboardButtons/RestaurantDashboardButtons.jsx';
import RestaurantDashboardMain from '../Components/RestaurantDashboardMain/RestaurantDashboardMain.jsx';
import './RestaurantDashboard.css';

import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";

const RestaurantDashboard = () => {
  const {username} = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [listings, setListings] = useState([]);
  const [requestItems, setRequestItems] = useState([]);
  const [requests, setRequests] = useState([]);
  const [foodPantries, setFoodPantries] = useState([]);
  const [idReceived, setIdReceived] = useState(false);

  
  useEffect (() => {
    fetchRestaurant();
  }, []);

  useEffect (() => {
    fetchListings();
    fetchRequestItems();
    fetchRequests();
    fetchFoodPantries();
  }, [idReceived]);

  useEffect(() => {
    
  }, [listings]);
  

  const fetchRestaurant = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/restaurants/restaurantusername/${username}`;
      const response = await axios.get(url);
      setRestaurant(response.data);
      setIdReceived(true);
    }
    catch (error) {
      console.error("Error fetching restaurant", error);
    }
  }

  // need to check for if quantity is 0 then don't display
  const fetchListings = async () => {

    try {
      if (restaurant.id) {
        const url = `${import.meta.env.VITE_BACKEND_URL}/listings/restaurant/${restaurant.id}`;
        const response = await axios.get(url);
        setListings(response.data);
      }
      else{
        console.log("No id, id is: ", restaurant.id)
      }
    }
    catch (error) {
      console.error("Error fetching restaurant listings", error);
    }
  }

  const fetchRequestItems = async () => {
    try{
      if (restaurant.id) {
        const url = `${import.meta.env.VITE_BACKEND_URL}/requestitems/restaurant/${restaurant.id}`;
        const response = await axios.get(url);
        setRequestItems(response.data);
      }
    }
    catch (error) {
      console.error("Error fetching request items", error);
    }
  }

  const fetchRequests = async () => {
    try{
      const url = `${import.meta.env.VITE_BACKEND_URL}/requests`;
      const response = await axios.get(url);
      setRequests(response.data);
    }
    catch (error) {
      console.error("Error fetching requests", error);
    }
  }

  const fetchFoodPantries = async () => {
    try{
      const url = `${import.meta.env.VITE_BACKEND_URL}/foodpantries`;
      const response = await axios.get(url);
      setFoodPantries(response.data);
    }
    catch (error) {
      console.error("Error fetching requests", error);
    }
  }

  // need some kind of function to handleEditProfile

    // Conditional rendering while waiting for data to arrive
    if (!idReceived) {
      return <p>Loading...</p>;
    }
  
  return (
    <>
    
    <div className="wholePage">
        {/* leftColumn refers to the sidebar */}
        <div className="leftColumn">
            <DashboardProfileSection 
              name={restaurant.name}
              profile_photo={restaurant.profile_photo}
              // restaurant={restaurant}
              // handleEditProfile={addNewListing}
            />
            <RestaurantDashboardButtons 
              restaurant={restaurant}
              listings={listings}
              requestItems={requestItems}
              requests={requests}
              foodPantries={foodPantries}
              // addNewListing={addNewListing}
            />
        </div>
        <div className="rightColumn">
            <DashboardHeader />
            <RestaurantDashboardMain
              restaurant={restaurant}
              listings={listings}
              requestItems={requestItems}
              requests={requests}
              foodPantries={foodPantries}
            />
        </div>
    </div>
  </>
  )
}

export default RestaurantDashboard