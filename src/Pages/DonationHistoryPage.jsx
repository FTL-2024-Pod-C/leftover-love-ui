import React from 'react'
import './DonationHistoryPage.css';
import DonationHistoryItem from '../Components/DonationHistoryItem/DonationHistoryItem.jsx';
import Header from '../Components/Header/Header';

const DonationHistoryPage = () => {
  return (
    <>
        <Header headingText="Donation History" closeRoute="/restaurant-dashboard"/>
        <DonationHistoryItem />
    </>
  )
}

export default DonationHistoryPage