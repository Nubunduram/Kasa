import React from 'react'
import beachImage from '../../assets/beach.png'

const Banner = () => {
  return (
    <section id="banner">
      <img src={beachImage} alt="beach image" />
      <div className='img-filter'></div>
      <div className='title-container'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  )
}

export default Banner
