// CherryBlossomPetals.js
import React from 'react';
import './CherryBlossom.css'; // Import the CSS file for styles

const CherryBlossomPetals = () => {
  const petals = Array.from({ length: 36 }); // Create an array of petals

  return (
    <div className="petals-container">
      {petals.map((_, index) => (
        <div className="petal" key={index} />
      ))}
    </div>
  );
};

export default CherryBlossomPetals;