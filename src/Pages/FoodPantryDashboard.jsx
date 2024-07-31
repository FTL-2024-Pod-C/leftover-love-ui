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
      const url = `${import.meta.env.VITE_BACKEND_URL}/foodpantries/foodpantryusername/${username}`;
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
      const url = `${import.meta.env.VITE_BACKEND_URL}/listings`;
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
      const url = `${import.meta.env.VITE_BACKEND_URL}/restaurants`;
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
              profile_photo={foodPantry.profile_photo}
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
              allRestaurants={allRestaurants}
              restaurantListings={restaurantListings}
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