import React from 'react'
import './RestaurantProfilePage.css';
import ProfilePage from '../Components/ProfilePage/ProfilePage.jsx';
import Header from '../Components/Header/Header.jsx'

const RestaurantProfilePage = () => {
  return (
    <>
        <Header headingText="Profile Page" closeRoute="/restaurant-dashboard"/>
        <ProfilePage />
    </>
  )
}

export default RestaurantProfilePage