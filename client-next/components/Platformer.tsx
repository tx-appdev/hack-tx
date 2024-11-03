// components/Platformer.tsx

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface PlatformerProps {
  characterImg: StaticImageData; // Image for character sprite
  backgroundImg: StaticImageData; // Image for background
  groundImg: StaticImageData; // Image for ground
}

export default function Platformer({ characterImg, backgroundImg, groundImg }: PlatformerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 300 });
  const [velocityY, setVelocityY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({}); // Track key states
  const groundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault(); // Prevent default behavior
      setKeys((prev) => ({ ...prev, [event.key]: true }));

      // Jump only if not already jumping
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
          setPosition((prev) => ({ ...prev, x: Math.min(prev.x + 10, window.innerWidth - 50) }));
        }
        if (keys["a"]) {
          setPosition((prev) => ({ ...prev, x: Math.max(prev.x - 10, 0) }));
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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <Image src={backgroundImg} alt="Background" layout="fill" objectFit="cover" className="absolute" />

      <div className="absolute bottom-0 w-full h-20 bg-repeat-x" style={{ backgroundImage: `url(${groundImg.src})` }} ref={groundRef}></div>

      {isPlaying ? (
        <div
          style={{ left: position.x, top: position.y }}
          className="absolute transition-transform duration-75"
        >
          <Image src={characterImg} alt="Character" width={50} height={50} />
        </div>
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-white bg-blue-600 rounded"
        >
          Play
        </button>
      )}
    </div>
  );
}
