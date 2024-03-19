import React from 'react';

const TagsContainer = ({ tags }) => {
  return ( 
    <ul id='tags-container'>
      {tags.map((tag, index) => (
        <li key={index} className='tag'>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagsContainer;
