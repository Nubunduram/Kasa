import React from 'react';
import montainImage from "../../assets/montain.png";

const AboutBanner = () => {
  return (
    <section className="banner">
      <img src={montainImage} alt="Montain landscape" />
      <div className='img-filter-light'></div>
    </section>
  )
}

export default AboutBanner
