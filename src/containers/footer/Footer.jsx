import React from 'react';
import './footer.css';
import travelfooter from '../../assests/travefooter.jpg';
import google from '../../assests/Link.jpg';
import facebook from '../../assests/facebook.jpg';
import twitter from '../../assests/twitter icon.jpg';
import mail from '../../assests/mail.jpg';
import instagram from '../../assests/instagram.jpg';
import slack from '../../assests/slack.png';
import youtube from '../../assests/youtube.png';


const Footer = () => {
  return (
    <div className='trave__footer section__padding' id="footer">
      
      <div className='trave__footer-links'>
        <div className='trave__footer-links_logo'>
          <img src={travelfooter} alt='logo'></img>
          <p>TRAVE</p>
        </div>
        <div className='trave-p'>
          <p>Trave is an innovative ticket booking app that is transforming the travel experience across Nigeria. With its user-friendly platform, wide range of bus operators and routes, and real-time updates, Trave is the go-to app for customers looking to book their next bus journey.</p>
        </div>
      </div>

      <div className='travel_contact'>
        <img src={google} alt='conatact us'></img>
      </div>

      <div className='travel_contact-socialmedia'>
        <h1>Connect With Us</h1>
        <img src={facebook} alt='facebook'></img>
        <img src={instagram} alt='instagram'></img>
        <img src={twitter} alt='twitter'></img>
        <img src={slack} alt='slack'></img>
        <img src={youtube} alt='youtube'></img>
        <img src={mail} alt='mail'></img>
      </div>
</div>
  );
};

export default Footer;