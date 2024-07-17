import React from "react";
import { Link } from 'react-router-dom';
import "./DashboardProfileSection.css";

const DashboardProfileSection = () => {
  return (
    <div className="profileBox">
        <div className="profileSection">
            <img className="profileImage" src="https://via.placeholder.com/150"/>
            <h2 className="profileName">Name</h2>
        </div>
            {/* Routes editProfileButton to editProfile */}
            <Link to="/editProfilePage">
            <button className="editProfilebutton">Edit Profile</button>
            </Link>
    </div>
  )
}

export default DashboardProfileSection;