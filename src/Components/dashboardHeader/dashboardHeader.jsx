import React from "react";
import { Link } from 'react-router-dom';
import "./dashboardHeader.css";

const DashboardHeader = () => {
    return (
        <div className="dashboardHeaderBox">
            <h1 className="dashboardHeaderText">Dashboard</h1>
            {/* Routes logOutButton to landingPage */}
            <Link to="/landingPage">
                <button className="logOutButton">Log Out</button>
            </Link>
        </div>
    )
}

export default DashboardHeader;