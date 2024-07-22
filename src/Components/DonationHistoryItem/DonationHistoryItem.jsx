import React from 'react'
import "./DonationHistoryItem.css";
import DonatedFoodItem from '../DonatedFoodItem/DonatedFoodItem.jsx';

const DonationHistoryItem = () => {
  return (
  <>  
    <h1 className="donationHistoryHeader">Donation History</h1>
    <div className="foodPantryBox">
        <div className="donationHistoryItemBox">
            <div className="foodPantryInfo">
                <img className="foodPantryImage" src="https://via.placeholder.com/150"/>
                <h2 className="foodPantryName">Food Pantry Name</h2>
                <h3 className="foodPantryLocation">City, State</h3>
            </div>
        </div>
        <DonatedFoodItem />
    </div>
  </>
  )
}

export default DonationHistoryItem