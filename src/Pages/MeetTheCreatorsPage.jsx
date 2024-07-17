import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import julia from '../assets/julia.png'
import madel from '../assets/madel.png'
import karina from '../assets/karina.png'
import './MeetTheCreators.css'

const MeetTheCreatorsPage = () => {
  return (
    <>
    <Header />
    <div className='creators'>
        <div className='creator'>
            <img src={madel} alt="madel-img" className="creator-img" />
            <h2>Madel</h2>
            <h3>Description</h3>
        </div>
        <div className='creator'>
            <img src={karina} alt="karina-img" className="creator-img" />
            <h2>Karina</h2>
            <h3>Description</h3>
        </div>
        <div className='creator'>
            <img src={julia} alt="julia-img" className="creator-img" />
            <h2>Julia</h2>
            <h3>Description</h3>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default MeetTheCreatorsPage