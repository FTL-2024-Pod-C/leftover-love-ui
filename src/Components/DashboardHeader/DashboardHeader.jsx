import React from "react";
import { Link } from 'react-router-dom';
import "./DashboardHeader.css";

const DashboardHeader = () => {
    return (
        <div className="dashboardHeaderBox">
            <h1 className="dashboardHeaderText">Dashboard</h1>
            <Link to="/">
                <button className="logout-btn">Log Out</button>
            </Link>
        </div>
    )
}

export default DashboardHeader;