import Image from "next/image";
import overlayImg from "../public/WASD.png";

interface WASDOverlayProps {
  scale: number;
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
