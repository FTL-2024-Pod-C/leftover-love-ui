import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';
import LandingPageHeader from '../Components/Header/LandingPageHeader'
import Footer from '../Components/Footer/Footer';
import landingPic from "./landingPic.png"
import foodBox from "./foodBox.png"
import loveHands from "./loveHands.png"
import threeHands from "./threeHands.png"

const LandingPage = () => {
  return (
    <>

    {/* Landing Page Test Code */}



    <LandingPageHeader />
    
    <div className="landingBox">
      <div className="leftSide">
        <h1>Turn surplus into sustenance for food pantries in need!</h1>
      </div>
      <div className="rightSide">
        <img src={landingPic} className="landingPicture" />
      </div>
    </div>


    <div className='impact'>
      <div className='stats'>
        <img src={loveHands} className="statsImage" />
        <h2 className="numberStats">Give Food</h2>
        <h3>Donate items through our website</h3>
      </div>
      <div className='stats'>
        <img src={foodBox} className="statsImage" />
        <h2 className="numberStats">Get Food</h2>
        <h3>Sign-up to receive donations from Leftover Love</h3>
      </div>
      <div className='stats'>
        <img src={threeHands} className="statsImage" />
        <h2 className="numberStats">Meet Us</h2>
        <h3>Learn about the Leftover Love creators.</h3>
      </div>
    </div>

    <div className="statisticsBox">
      <h1 className="causeText">Our Cause</h1>
    </div>
    <div className="gridContainer">
      <div className="gridBox">
        <div className="statNumber">1,234</div>
        <div className="statDescription">Meals provided</div>
      </div>
      <div className="gridBox">
        <div className="statNumber">567</div>
        <div className="statDescription">Volunteers</div>
      </div>
      <div className="gridBox">
        <div className="statNumber">89%</div>
        <div className="statDescription">Satisfaction rate</div>
      </div>
      <div className="gridBox">
        <div className="statNumber">12</div>
        <div className="statDescription">Partner organizations</div>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default LandingPage