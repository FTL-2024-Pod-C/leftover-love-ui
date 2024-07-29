import React from 'react'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";

import DashboardHeader from '../Components/DashboardHeader/DashboardHeader.jsx';
import DashboardProfileSection from '../Components/DashboardProfileSection/DashboardProfileSection.jsx';
import FoodPantryDashboardButtons from '../Components/FoodPantryDashboardButtons/FoodPantryDashboardButtons.jsx';
import FoodAvailableHeader from '../Components/FoodAvailableHeader/FoodAvailableHeader.jsx';
import FoodCard from '../Components/FoodCard/FoodCard.jsx';
import FoodCardGrid from '../Components/FoodCardGrid/FoodCardGrid.jsx';
import './FoodPantryDashboard.css';

const DEV_BASE_URL = "https://leftover-love-api.onrender.com"

const FoodPantryDashboard = () => {
  const {username} = useParams();
  const [foodPantry, setFoodPantry] = useState({});
  const [idReceived, setIdReceived] = useState(false);
  const [restaurantListings, setRestaurantListings] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect (() => {
    fetchFoodPantry();
    //fetchListings();
  }, []);

  useEffect (() => {
    fetchListings();
    fetchAllRestaurants();
  }, [idReceived]);

  const fetchFoodPantry = async () => {
    try {
      // console.log(username);
      const url = `${DEV_BASE_URL}/foodpantries/foodpantryusername/${username}`;
      const response = await axios.get(url);
      // console.log(response.data);
      setFoodPantry(response.data);
      setIdReceived(true);
    }
    catch (error) {
      console.error("Error fetching food pantry", error);
    }
  }

  const fetchListings = async () => {
    try {
      const url = `${DEV_BASE_URL}/listings`;
      console.log(url);
      const response = await axios.get(url);
      console.log(response.data);
      setRestaurantListings(response.data);
    }
    catch (error) {
      console.error("Error fetching listings", error);
    }
  }

  const fetchAllRestaurants = async () => {
    try {
      const url = `${DEV_BASE_URL}/restaurants`;
      console.log(url);
      const response = await axios.get(url);
      console.log(response.data);
      setAllRestaurants(response.data);
    }
    catch (error) {
      console.error("Error fetching restaurants", error);
    }
  }

  const handleOnSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleActiveCategoryChange = (event) => {
    setActiveCategory(event.target.value);
  };

  console.log("setActiveCategory", activeCategory)
  console.log("searchActiveCategory", searchInputValue)

  const restaurantListingsByCategory =
  Boolean(activeCategory) && activeCategory !== "all"
  ? restaurantListings.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
  : restaurantListings


  const restaurantListingsToShow = Boolean(searchInputValue)
  ? restaurantListingsByCategory.filter((p) => p.name.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1)
  : restaurantListingsByCategory



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
              allRestaurants={allRestaurants}
            />
        </div>
        <div className="right-side">
            <DashboardHeader />
            <FoodAvailableHeader 
              searchInputValue={searchInputValue}
              handleOnSearchInputChange={handleOnSearchInputChange}
              handleActiveCategoryChange={handleActiveCategoryChange}
            />
            <FoodCardGrid 
              restaurantListings={restaurantListingsToShow}
              allRestaurants={allRestaurants}
            />
        </div>
    </div>
  </>
  )
}

export default FoodPantryDashboard