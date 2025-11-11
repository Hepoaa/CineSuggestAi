import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PhotoRow = ({
  images,
  direction = "left",
  speed = 50, // pixels por segundo
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [positions, setPositions] = useState<number[]>([]);

  // Inicializa a posição de cada imagem
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);

      const initialPositions = images.map((_, i) => i * 272); // largura + margin: 256 + 16
      setPositions(initialPositions);
    }
  }, [images]);

  // Animação contínua
  useEffect(() => {
  const interval = setInterval(() => {
    setPositions((prev) =>
      prev.map((pos) => {
        let newPos = direction === "left" ? pos - speed : pos + speed;
        if (direction === "left" && newPos < -256) newPos = containerWidth;
        if (direction === "right" && newPos > containerWidth) newPos = -256;
        return newPos;
      })
    );
  }, 16);

  return () => clearInterval(interval);
}, [containerWidth, direction, speed]);

  return (
    <div ref={containerRef} className="relative w-full h-70 overflow-hidden">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
          alt={`Gallery image ${i}`}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          className="w-60 h-full object-cover rounded-lg shadow-md absolute top-0"
          style={{ left: positions[i] }}
          transition={{
            delay: i * 0.1,
            duration: 0.6,
            type: "spring",
          }}
          viewport={{ once: false, amount: 0.2 }} 
        />
      ))}
    </div>
  );
};

export default function AssimetricPhotosGallery() {
  const imagesRow1 = [
    "poster01.jpg",
    "poster04.jpg",
    "poster05.jpg",
    "poster06.jpg",
    "poster02.jpg",
    "poster07.jpg",
    "poster08.jpg",
    "poster09.jpg",
  ];

  const imagesRow2 = [
    "poster10.jpg",
    "poster11.jpg",
    "poster03.jpg",
    "poster12.jpg",
    "poster13.jpg",
    "poster14.jpg",
    "poster15.jpg",
    "poster16.jpg",
  ];

  return (
    <div className=" py-12 overflow-hidden">
      <div className="mb-8">
        <PhotoRow images={imagesRow1} direction="right" speed={0.4} />
      </div>
      <div>
        <PhotoRow images={imagesRow2} direction="left" speed={0.4} />
      </div>
    </div>
  );
}
