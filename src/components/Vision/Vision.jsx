import React from 'react';
import './vision.css';
import vision from '../../assests/vision.mp4';
import busiconn from '../../assests/busiconn.png';




const Vision = () => {
  return (
    <div className='trave__vision' id="vision">
      <div className='trave__vision-video'>
      <video src={vision}  type="video/mp4"> </video>
      </div>
      <div className='trave_vision-content'>
        <div>
        <h1>Our Vision is to become:</h1>
             </div>
        <div className='trave-vision-iconbus'>
        <img src={busiconn} alt='bus iconic' />
        <p>The premier Online Booking platform for bus ticket booking across Africa </p>
        </div>
          <div className='trave-vision-iconbus'>
        <img src={busiconn} alt='bus iconic' />
         <p>To offer seamless, convenient and secure booking experiences</p>
         </div>
       <div className='trave-vision-iconbus'>
        <img src={busiconn} alt='bus iconic' />
        <p>A global leader promoting sustainable and eco-friendly transportation solutions</p>
        </div>
        <div className='trave-vision-iconbus'>
        <img src={busiconn} alt='bus iconic' />
        <p>To connect travellers to their desired destination</p></div>
      </div>
      
    </div>
  )
}

export default Vision;