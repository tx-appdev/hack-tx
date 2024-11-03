// components/Platformer.tsx

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import WASDOverlay from "./WASDOverlay";

interface PlatformerProps {
  characterImg: StaticImageData; // Image for character sprite
  backgroundImg: StaticImageData; // Image for background
  groundImg: StaticImageData; // Image for ground
}

export default function Platformer({ characterImg, backgroundImg, groundImg }: PlatformerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState({ x: 200, y: 400 });
  const [velocityY, setVelocityY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});
  const [overlayScale, setOverlayScale] = useState(1);
  const groundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (!isPlaying) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault(); // Prevent default behavior
      setKeys((prev) => ({ ...prev, [event.key]: true }));

      if (event.key === "w" && !isJumping) {
        setIsJumping(true);
        setVelocityY(-15); // Jump velocity
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [event.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isPlaying, isJumping]);

  useEffect(() => {
    if (!isPlaying) return;

    const gravity = 0.5;
    const groundLevel = groundRef.current?.offsetTop || 0;

    const gameLoop = setInterval(() => {
      setVelocityY((prev) => prev + gravity);
      setPosition((prev) => {
        const newY = prev.y + velocityY;

        // Allow horizontal movement based on key states
        if (keys["d"]) {
          setPosition((prev) => ({ ...prev, x: Math.min(prev.x + 7, window.innerWidth - 159) }));
        }
        if (keys["a"]) {
          setPosition((prev) => ({ ...prev, x: Math.max(prev.x - 7, 94) }));
        }

        // Check if the character has landed on the ground
        if (newY >= groundLevel - 50) { // Assuming character is 50px high
          setIsJumping(false);
          return { ...prev, y: groundLevel - 50 };
        }
        return { ...prev, y: newY };
      });
    }, 20);

    return () => clearInterval(gameLoop);
  }, [isPlaying, velocityY, keys]);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Start oscillation on play button click
    setOverlayScale(1); // Reset scale
    const intervalId = setInterval(() => {
      setOverlayScale((prev) => (prev === 1 ? 1.05 : 1)); // Toggle between 1 and 1.05
    }, 300); // Change size every 300ms

    // Clear interval when not playing anymore
    return () => clearInterval(intervalId);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Remove borders when playing */}
      <div className={`absolute overflow-hidden transition-border duration-500 ease inset-0 flex items-center justify-center ${isPlaying ? 'border-0' : 'border-l-[100px] border-r-[100px] border-t-10 border-b-10 border-black'}`}>        <Image
          src={backgroundImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className={`absolute transition-transform duration-500 ease ${isPlaying ? 'scale-105' : 'scale-100'}`}
        />
      </div>

      <div className="absolute bottom-10 w-full h-20 bg-repeat-x bg-transparent" ref={groundRef}></div>

      {isPlaying ? (
        <div
          style={{ left: position.x, top: position.y }}
          className={`absolute transition-transform duration-75 transform ${isPlaying ? 'scale-125' : 'scale-75'}`}
        >
          <Image src={characterImg} alt="Character" width={75} height={75} />
        </div>
      ) : (
        <button
          onClick={handlePlayClick}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-white bg-pink-500 rounded font-[SuperLegend] hover:bg-pink-600 p-4 text-center text-[--body]"
        >
          Play
        </button>
      )}
      <WASDOverlay scale={overlayScale} />
    </div>
  );
}
