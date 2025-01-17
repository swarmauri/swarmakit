import React from 'react';
import './CardImage.css';

interface CardImageProps {
  src: string;
  alt: string;
  caption?: string;
  overlay?: React.ReactNode;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt, caption, overlay }) => {
  return (
    <div className="card-image-container">
      <img className="card-image" src={src} alt={alt} />
      {overlay && <div className="image-overlay">{overlay}</div>}
      {caption && <div className="image-caption">{caption}</div>}
    </div>
  );
};

export default CardImage;