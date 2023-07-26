import React from 'react';
import './partners.css';
import logo1 from '../../assests/LOGO-1.jpg';
import edsa from '../../assests/edsa.svg';
import meta from '../../assests/meta.svg';
import tech4dev from '../../assests/techdev.svg';


const Partners = () => {
  return (
    <div className='partners__possibility section__padding' id='partners'>
      <div className='partners__features-heading'>
        <h1>Our Partners:</h1>
      </div>
      <div className='trave__image-partners'>
      <div className='partners__possibility-image'>
        <img src={logo1}  alt="ekiti state government" />
        <h2>EKITI STATE GOVERNMENT</h2>
      </div>
      <div className='partners__possibility-image'>
        <img src={edsa} alt="ekiti digital skill" />
      </div>
      <div className='partners__possibility-image'>
        <img src={meta} alt="meta logo" />
      </div>
      <div className='partners__possibility-image'>
        <img src={tech4dev} alt="ekiti state government" />
      </div>
      </div>
    </div>
  )
}

export default Partners;