import React from 'react'
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
<>
<div className="wholeProfilePage">
    <div className="profilePageTopRow"> 
        <img className="profilePageImage" src="https://via.placeholder.com/150"/>
        <div className="profilePageBasicInfo">
            <div className="profilePageDetails">
                <h2 className="profilePageName">Restaurant Name</h2>
                <h3 className="profilePageLocation">City, State</h3>
            </div>
            <h4 className="profilePageContact">email@email.com | 234-567-8910</h4>
        </div>
    </div>
    <div className="profilePageBottomRow">
        <div className="profilePageDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <img className="mapComponent" src="https://via.placeholder.com/150"/>
    </div>
</div>
</>
  )
}

export default ProfilePage