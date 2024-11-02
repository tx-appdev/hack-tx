"use client";
import React, { useState, useEffect } from "react";
import "./SwordAnimation.css";

export default function SwordAnimation() {
  const [sliced, setSliced] = useState(false);
  const [showSword, setShowSword] = useState(true);
  // Define the function that triggers the animation
  const handleSlice = () => {
    setSliced(true);
  };

  // Use `useEffect` to call `handleSlice` when the component mounts
  useEffect(() => {
    handleSlice();
    setTimeout(() => {
      setShowSword(false); // Hides the sword GIF after 1 second (adjust as needed)
    }, 1000); 
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div className="sword-animation-container">
      <div className={`sliced-title ${sliced ? "sliced" : ""}`}>
        <span className="upper-half">game</span>
        <span className="lower-half">creator</span>
      </div>
      <img
        src="slice_effect.gif" // Ensure this is the correct path to your sword image
        alt="Sword"
        className='sword'
      />
    </div>
  );
}
