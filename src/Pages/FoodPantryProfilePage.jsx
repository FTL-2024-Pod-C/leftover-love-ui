import React from 'react'
import './FoodPantryProfilePage.css';
import ProfilePage from '../Components/ProfilePage/ProfilePage.jsx';
import Header from '../Components/Header/Header.jsx'

const FoodPantryProfilePage = () => {
  return (
    <>
    <Header headingText="Profile Page" closeRoute="/food-dashboard"/>
    <ProfilePage />
    </>
  )
}

export default FoodPantryProfilePage