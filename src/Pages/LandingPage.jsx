import React from 'react'
import {useNavigate} from "react-router-dom"
import './LandingPage.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import landingPic from "./landingPic.png"
import foodBox from "./foodBox.png"
import loveHands from "./loveHands.png"
import julia from '../assets/julia.png'
import madel from '../assets/madel.png'
import karina from '../assets/karina.png'

const LandingPage = () => {
  const navigate = useNavigate();

const goToLogin = () => {
  console.log('Close button clicked');
  navigate(`/login`);
};

const goToSignUp = () => {
  console.log('Close button clicked');
  navigate(`/sign-up`);
};

  return (
    <>
    <Header  headingText="Leftover Love" 
    // closeButton={
    //   <IconButton onClick={goToLogin}>
    //   <AccountCircleIcon sx={{ fontSize: 50 }}/>
    //   </IconButton>
    // }
    />
    
    <div className="headline-section">
      <div className="headline-section-text">
        <h1>Transform surplus food into sustenance for those in need.</h1>
        <p>At Leftover Love, we're dedicated to reducing food waste and fighting hunger with a seamless and impactful solution. </p>
        <ul className="bullet-points">
            <li><strong>Sign Up for Free:</strong> Create your account and explore our platform at no cost.</li>
            <li><strong>Easy Listings and Requests:</strong> Restaurants can list surplus food, and food pantries can browse and request donations seamlessly.</li>
            <li><strong>Make a Difference:</strong> Contribute to reducing food waste and fighting hunger with every donation.</li>
        </ul>
        <div className='btn-group'>
          <button onClick={goToSignUp} className="landing-page-btn">Sign Up</button> 
          <button onClick={goToLogin} className="landing-page-btn">Login</button> 
        </div>
      </div>

      <div className="headline-section-img">
        <img src={landingPic} className="landingPicture" />
      </div>
    </div>


    <div className='impact'>
      <div className='stats'>
        <img src={loveHands} className="statsImage" />
        <h2 className="numberStats">For Restaurants:</h2>
        <h3>Effortlessly list your surplus food, manage donations, and track inventory through our intuitive dashboard. View and respond to requests from food pantries, making it easier than ever to contribute to the community.</h3>
      </div>
      <div className='stats'>
        <img src={foodBox} className="statsImage" />
        <h2 className="numberStats">For Food Pantries:</h2>
        <h3 className="statsD">Explore available food donations, filter by type and location, and make direct requests to restaurants. Our smart matching system ensures you find the perfect matches for your needs quickly and efficiently.</h3>
      </div>
    </div>

    <div className="statisticsBox">
      <h1 className="causeText">Meet the Creators</h1>
    </div>
    <div className="gridContainer">
      <div className="gridBox">
        <img src={madel} alt="madel-img" className="creator-img" />
        <h2>Madel</h2>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/madel-sibal-4108ba22b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
          style={{ color: '#0077b5' }}
          />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/madelds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
          style={{ color: '#333' }}
          />
        </IconButton>
        <h3>Description</h3>
      </div>
      <div className="gridBox">
        <img src={karina} alt="karina-img" className="creator-img" />
        <h2>Karina</h2>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/karina-perez0405"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
          style={{ color: '#0077b5' }}
          />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/karinaa0405"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
          style={{ color: '#333' }}
          />
        </IconButton>
        <h3>Description</h3>
      </div>
      <div className="gridBox">
        <img src={julia} alt="julia-img" className="creator-img" />
        <h2>Julia</h2>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/julia-chaidez-cpp2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
          style={{ color: '#0077b5' }}
          />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/juliachaidez3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
          style={{ color: '#333' }}
          />
        </IconButton>
        <h3>Description</h3>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default LandingPage