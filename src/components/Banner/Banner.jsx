import React from 'react'
import beachImage from '../../assets/beach.png'

const Banner = () => {
  return (
    <section className="banner">
      <img src={beachImage} alt="Beach landscape" />
      <div className='img-filter'></div>
      <div className='title-container'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  )
}

export default Banner
