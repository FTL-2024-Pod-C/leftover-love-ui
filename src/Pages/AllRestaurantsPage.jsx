import React from 'react'
import './AllRestaurantsPage.css';
import AllRestaurantsItem from '../Components/AllRestaurantsItem/AllRestaurantsItem.jsx';
import Header from '../Components/Header/Header.jsx'
import {useNavigate, useLocation} from "react-router-dom"
import {useState, useEffect} from 'react';

const AllRestaurantsPage = () => {
  let { state } = useLocation();
  console.log(state.allRestaurants[0]);
  console.log(state.foodPantry);

  const [allRestaurants, setAllRestaurants] = useState(state.allRestaurants);
  const [foodPantry, setFoodPantry] = useState(state.foodPantry);
  
  
  return (
    <>
        <Header headingText="All Restaurants" closeRoute="/food-dashboard"/>
        <AllRestaurantsItem
          allRestaurants={allRestaurants}
        />
    </>
  )
}

export default AllRestaurantsPage