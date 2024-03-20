import React, { useState } from 'react';

const Carousel = ({ pictures }) => {
  // State variable for index, function to change state index, initialize the index/state at 0
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  // 
  const goToPreviousPicture = () => {
    // check if state/previndex = first picture, if yes goes to last picture otherwise go to previous picture
    setCurrentPictureIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const goToNextPicture = () => {
    // check if state/previndex = last picture, if yes goes back to first picture otherwise go to next picture
    setCurrentPictureIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="carousel">
      <img src={pictures[currentPictureIndex]} alt={pictures[currentPictureIndex]} />

      <div id="button-overlay">
        <button id="previous-picture-arrow" onClick={goToPreviousPicture}>
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="80" viewBox="0 0 24 25" fill="none">
            <path d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z" fill="white" />
          </svg>
        </button>

        <div id="picture-number">{`${currentPictureIndex + 1} / ${pictures.length}`}</div>

        <button id="next-picture-arrow" onClick={goToNextPicture}>
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="80" viewBox="0 0 24 25" fill="none">
            <path d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z" fill="white" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
