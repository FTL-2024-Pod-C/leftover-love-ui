// // import React from 'react'
// // import { Link } from 'react-router-dom';
// // import "./RestaurantDashboardButtons.css";
// // import {useNavigate} from "react-router-dom"

// // const RestaurantDashboardButtons = ({restaurant, addNewListing}) => {
// //     console.log("resturant", restaurant)
// //     const navigate = useNavigate();
// //     return (
// //     <div className='buttonBox'>
// //         <div className="allButtons">
// //         {/* Routing of buttons */}
        
// //         <button className="dashboardButton" onClick={()=> navigate(`/restaurant-dashboard/${restaurant.username}`)}>Dashboard</button>
        
// //         <Link to="/restaurant-profile">
// //             <button className="dashboardButton">View Profile</button>
// //         </Link>
// //         <Link to={{ pathname: "/add-listing", state: {restaurant, addNewListing } }}>
// //       <button className="dashboardButton">Add Listing</button>
// //     </Link>
// //         <Link to="/donation-history">
// //             <button className="dashboardButton">Donation History</button>
// //         </Link>
// //         </div>
// //     </div>
// //   )
// // }

// // export default RestaurantDashboardButtons
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import './RestaurantDashboardButtons.css';

// const RestaurantDashboardButtons = ({ restaurant, addNewListing }) => {
//     console.log("restaurant in buttons", restaurant)
//   const navigate = useNavigate();

//   return (
//     <div className='buttonBox'>
//       <div className="allButtons">
//         {/* Routing of buttons */}
//         <button className="dashboardButton" onClick={() => navigate(`/restaurant-dashboard/${restaurant.username}`)}>
//           Dashboard
//         </button>
        
//         <Link to="/restaurant-profile">
//           <button className="dashboardButton">View Profile</button>
//         </Link>

//         <Link to={{ pathname: "/add-listing", state: { restaurant, addNewListing } }}>
//           <button className="dashboardButton">Add Listing</button>
//         </Link>

//         <Link to="/donation-history">
//           <button className="dashboardButton">Donation History</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default RestaurantDashboardButtons;
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './RestaurantDashboardButtons.css';

const RestaurantDashboardButtons = ({ restaurant, addNewListing }) => {
  const navigate = useNavigate();

  return (
    <div className='buttonBox'>
      <div className="allButtons">
        <button className="dashboardButton" onClick={() => navigate(`/restaurant-dashboard/${restaurant.username}`)}>
          Dashboard
        </button>
        
        <Link to="/restaurant-profile">
          <button className="dashboardButton">View Profile</button>
        </Link>

        {/* use state in order to pass in props to a component that isn't called directly */}
        <Link to="/add-listing" state={{restaurant}} >
          <button className="dashboardButton">Add Listing</button>
        </Link>

        <Link to="/donation-history">
          <button className="dashboardButton">Donation History</button>
        </Link>
      </div>
    </div>
  );
}

export default RestaurantDashboardButtons;
