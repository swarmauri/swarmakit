import React from 'react';
import './CardHeader.css';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  icon?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, imageUrl, icon }) => {
  return (
    <div className="card-header">
      {imageUrl && <img src={imageUrl} alt="Card header image" className="header-image" />}
      {icon && <div className="header-icon">{icon}</div>}
      <div className="header-text">
        <h3 className="header-title">{title}</h3>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default CardHeader;