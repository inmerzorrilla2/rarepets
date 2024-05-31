import React from 'react';
import './styles/pets.css';

const Pets = ({ name, age, image }) => {
  return (
    <section className="pet1">
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <img src={image} alt={name} />
    </section>
  );
};

export default Pets;

