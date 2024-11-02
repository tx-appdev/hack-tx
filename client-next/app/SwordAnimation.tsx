"use client";
import React, { useState } from 'react';
import './SwordAnimation.css'; // Add a CSS file to style the sword and text animations

export default function SwordAnimation() {
  const [sliced, setSliced] = useState(false);

  const handleSlice = () => {
    setSliced(true);
    // Reset animation after a delay to allow replay on next click
    setTimeout(() => setSliced(false), 2000);
  };

  return (
    <div className="sword-animation-container" onClick={handleSlice}>
      <h1 className={`sliced-title ${sliced ? 'sliced' : ''}`}>
        <span className="upper-half">Samurai</span>
        <span className="lower-half">Title</span>
      </h1>
      <img
        src="slice_effect.gif" // replace with the path to your sword image or animation
        alt="Sword"
        className={`sword ${sliced ? 'sword-swing' : ''}`}
      />
    </div>
  );
}
