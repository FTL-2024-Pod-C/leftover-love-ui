import React from 'react'
import AllRestaurantsItem from '../Components/AllRestaurantsItem/AllRestaurantsItem.jsx';
import Header from '../Components/Header/Header.jsx'
import {useNavigate, useLocation} from "react-router-dom"
import {useState} from 'react';

const AllRestaurantsPage = () => {
  const navigate = useNavigate();
  
  let { state } = useLocation();

  const [allRestaurants, setAllRestaurants] = useState(state.allRestaurants);
  const [foodPantry, setFoodPantry] = useState(state.foodPantry);

  const handleClose = () => {
    navigate(`/food-dashboard/${foodPantry.username}`);
  };
  
  
  return (
    <>
        <Header headingText="All Restaurants"
         closeButton={
          <button onClick={handleClose} className="logout-btn">
            Back to Dashboard
          </button>
        }/>
        <AllRestaurantsItem
          allRestaurants={allRestaurants}
        />
    </>
  )
}

export default AllRestaurantsPage