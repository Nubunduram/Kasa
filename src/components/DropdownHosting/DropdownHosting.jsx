import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

const DropdownHosting = ({description, equipments}) => {
  
  const equipmentsList = equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <section id='dropdown-hosting'>
      <Dropdown title={"Description"} content={description}/>
      <Dropdown title={"Équipements"} content={equipmentsList}/>
    </section>
  )
}

export default DropdownHosting
