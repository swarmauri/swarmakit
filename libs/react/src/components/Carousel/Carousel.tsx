import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoPlay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const timerRef = useRef<number>();

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, interval, images.length]);

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsPlaying(true);
    }
  };

  return (
    <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button className="carousel-control prev" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>
        Prev
      </button>
      <button className="carousel-control next" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>
        Next
      </button>
    </div>
  );
};

export default Carousel;