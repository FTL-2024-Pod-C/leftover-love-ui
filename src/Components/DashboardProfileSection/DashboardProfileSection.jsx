import React from "react";
import { Link } from 'react-router-dom';
import "./DashboardProfileSection.css";

const DashboardProfileSection = (props) => {
  return (
    <div className="profileBox">
        <div className="profileSection">
            <img className="profileImage" src={props.profile_photo}/>
            <h2 className="profileName">{props.name}</h2>
        </div>
    </div>
  )
}

export default DashboardProfileSection;