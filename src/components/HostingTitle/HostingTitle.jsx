import React from 'react';

const HostingTitle = ({ title, location }) => {
  return (
    <div id='title-location'>
      <h2>{title}</h2>
      <h3>{location}</h3>
    </div>
  );
};

export default HostingTitle;
