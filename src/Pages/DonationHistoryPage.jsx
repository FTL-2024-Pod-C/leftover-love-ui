import React from 'react'
import './DonationHistoryPage.css';
import DonationHistoryItem from '../Components/DonationHistoryItem/DonationHistoryItem.jsx';
import Header from '../Components/Header/Header';
import {useNavigate, useLocation} from "react-router-dom"

const DonationHistoryPage = () => {
  let { state } = useLocation();
  const restaurant = state.restaurant;
  const listings = state.listings;
  const requests = state.requests;
  const requestItems = state.requestItems;
  const foodPantries = state.foodPantries;
  
  return (
    <>
        <Header headingText="Donation History" closeRoute="/restaurant-dashboard"/>
        <DonationHistoryItem />
    </>
  )
}

export default DonationHistoryPage;