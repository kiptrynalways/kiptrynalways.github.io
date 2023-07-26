import React from 'react';
import './brand.css';
import driver from '../../assests/driver.png'; 

const Brand = () => {
  return (
    <div  className='trave__brand section__padding'>
      <div className='trave__image'>
        <img src={driver} alt='fine baby' />
      </div>
      <div className='trave_brand-content'>
            <h2>Trave thriving in Nigeria</h2>
        <p>We hope to connect more than 100million people around Nigeria and Africa as a whole with our mobility platform.Our platform provides a convenient and reliable way for customers to book bus tickets, track their journeys, and receive real-time updates on their travel status.</p>
      </div>
    </div>
  )
}

export default Brand;