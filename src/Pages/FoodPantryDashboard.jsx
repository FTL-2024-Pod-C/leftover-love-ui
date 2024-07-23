import React from 'react'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";

import DashboardHeader from '../Components/DashboardHeader/DashboardHeader.jsx';
import DashboardProfileSection from '../Components/DashboardProfileSection/DashboardProfileSection.jsx';
import FoodPantryDashboardButtons from '../Components/FoodPantryDashboardButtons/FoodPantryDashboardButtons.jsx';
import FoodAvailableHeader from '../Components/FoodAvailableHeader/FoodAvailableHeader.jsx';
import FoodCard from '../Components/FoodCard/FoodCard.jsx';
import './FoodPantryDashboard.css';

const FoodPantryDashboard = () => {
  const DEV_BASE_URL = "http://localhost:3000"

  const [foodPantry, setFoodPantry] = useState({});

  const {username} = useParams();
  // const [listings, setListings] = useState([]);

  useEffect (() => {
    fetchFoodPantry();
    // fetchListings();
  }, []);

  const fetchFoodPantry = async () => {
    try {
      // console.log(username);
      const url = `${DEV_BASE_URL}/foodpantries/foodpantryusername/${username}`;
      const response = await axios.get(url);
      // console.log(response.data);
      setFoodPantry(response.data);
    }
    catch (error) {
      console.error("Error fetching food pantry", error);
    }
  }



  return (
    <>
    <div className="wholePage">
        {/* leftColumn refers to the sidebar */}
        <div className="leftColumn">
          <DashboardProfileSection 
              name={foodPantry.name}
            />
            <FoodPantryDashboardButtons
              foodPantry = {foodPantry}
            />
        </div>
        <div className="rightColumn">
            <DashboardHeader />
            <FoodAvailableHeader />
            <FoodCard />
        </div>
    </div>
  </>
  )
}

export default FoodPantryDashboard