// CherryBlossomPetals.js
import React from 'react';
import './CherryBlossomPetals.css'; // Import the CSS file for styles

const CherryBlossomPetals = () => {
  const petals = Array.from({ length: 20 }); // Create an array of petals

  return (
    <div className="petals-container">
      {petals.map((_, index) => (
        <div className="petal" key={index} />
      ))}
    </div>
  );
};

export default CherryBlossomPetals;
