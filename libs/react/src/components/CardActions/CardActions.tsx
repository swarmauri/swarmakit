import React from 'react';
import './CardActions.css';

interface CardActionsProps {
  buttons: Array<{ label: string; onClick: () => void; disabled?: boolean }>;
}

const CardActions: React.FC<CardActionsProps> = ({ buttons }) => {
  return (
    <div className="card-actions-container">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="card-action-button"
          onClick={button.onClick}
          disabled={button.disabled}
          aria-disabled={button.disabled}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default CardActions;