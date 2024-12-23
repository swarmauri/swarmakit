import React from 'react';
import './BasicCard.css';

interface BasicCardProps {
  header: string;
  body: string;
  footer: string;
  imageUrl?: string;
  isDisabled?: boolean;
  onActionClick?: () => void;
}

const BasicCard: React.FC<BasicCardProps> = ({ header, body, footer, imageUrl, isDisabled, onActionClick }) => {
  return (
    <div className={`basic-card ${isDisabled ? 'basic-card-disabled' : ''}`}>
      {imageUrl && <img src={imageUrl} alt="Card Image" className="basic-card-image" />}
      <div className="basic-card-header">{header}</div>
      <div className="basic-card-body">{body}</div>
      <div className="basic-card-footer">
        {footer}
        <button onClick={onActionClick} disabled={isDisabled} className="basic-card-action">
          Action
        </button>
      </div>
    </div>
  );
};

export default BasicCard;