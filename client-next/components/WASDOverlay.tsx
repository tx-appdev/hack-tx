// components/WASDOverlay.tsx

import Image from "next/image";
import overlayImg from "../public/WASD.png"; // Replace with the path to your overlay PNG

interface WASDOverlayProps {
  scale: number; // Accept scale as a prop
}

export default function WASDOverlay({ scale }: WASDOverlayProps) {
  return (
    <div className="fixed bottom-10 left-10 cursor-pointer overflow-hidden">
      <Image
        src={overlayImg}
        alt="WASD Controls"
        width={100}
        height={100}
        style={{ transform: `scale(${scale})`, transition: "transform 0.2s" }}
      />
    </div>
  );
}

