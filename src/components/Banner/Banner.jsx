import React from 'react'
import beachImage from '../../assets/beach.png'

const TopSection = () => {
  return (
    <section id="banner">
      <img src={beachImage} alt="beach image" />
      <div className='img-filter'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  )
}

export default TopSection
