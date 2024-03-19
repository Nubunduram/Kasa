import React from 'react'

const Carousel = ({pictures}) => {
  const test = pictures[0];
  return (
    <div id='test'>
      <img src={test} />
    </div>
  )
}

export default Carousel
