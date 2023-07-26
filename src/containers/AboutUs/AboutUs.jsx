import React from 'react';
import './AboutUs.css';
import aboutus from '../../assests/aboutUs.png';
const AboutUs = () => {
  return (
    <div className='trave__about section__margin' id='about'>
      <div className='trave__about-feature'>
        <div>
          <h2>
          About Us
          </h2>
          <p>
          Trave Inc. is Nigeria’s leading mobility platform. It offers a wide range of app-based services across Nigeria. We specialize in providing convenient and reliable bus ticket booking services, making travel easier and more accessible for everyone.Our company is committed to using the latest technologies to ensure that our customers have the best possible booking experience. Our user-friendly online platform allows customers to easily search for and book bus tickets, as well as track their journeys in real-time.
          </p>
          <p>
          We understand that travel can be stressful, which is why we prioritize safety and comfort in all of our services. Our buses are regularly maintained and equipped with modern amenities such as air conditioning, comfortable seating, and onboard entertainment systems.
In addition to our bus ticket booking services, we also offer various travel-related technologies to enhance the overall travel experience. Our mobile app allows customers to book tickets, track their journeys, and receive important updates all from the convenience of their smartphones.
          </p>
        </div>

        <div className='travel_aboutus-image'>
        <img src={aboutus} alt="logo" />
        </div>
      </div>
    </div>
  );
};


export default AboutUs;
