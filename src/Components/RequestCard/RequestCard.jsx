import React, { useState } from 'react';
import "./RequestCard.css";

const RequestCard = () => {
  return (
    <div className="requestCardBox">
        <img className="requestCardImage" src="https://via.placeholder.com/150"/>
        <div className="requestCardDetails">
            <h2 className="requestCardName">name</h2>
            <h4 className="expirationDate">date</h4>
        </div>
    </div>
  );
}

export default RequestCard