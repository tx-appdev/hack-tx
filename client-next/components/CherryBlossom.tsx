"use client";

import React, { useEffect, useState } from 'react';
import './CherryBlossom.css';

const CherryBlossomPetals = () => {
  const petals = Array.from({ length: 36 });

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return showComponent && (
    <div className="petals-container">
      {petals.map((_, index) => (
        <div className="petal" key={index} />
      ))}
    </div>
  );
};

export default CherryBlossomPetals;