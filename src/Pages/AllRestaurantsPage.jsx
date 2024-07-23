import React from 'react'
import './AllRestaurantsPage.css';
import AllRestaurantsItem from '../Components/AllRestaurantsItem/AllRestaurantsItem.jsx';
import Header from '../Components/Header/Header.jsx'

const AllRestaurantsPage = () => {
  return (
    <>
        <Header headingText="All Restaurants" closeRoute="/food-dashboard"/>
        <AllRestaurantsItem/>
    </>
  )
}

export default AllRestaurantsPage