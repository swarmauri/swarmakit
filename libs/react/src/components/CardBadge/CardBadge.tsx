import React from 'react';
import './CardBadge.css';

interface CardBadgeProps {
  content: string | number;
  status?: 'default' | 'active' | 'inactive' | 'hovered';
}

const CardBadge: React.FC<CardBadgeProps> = ({ content, status = 'default' }) => {
  return (
    <span className={`card-badge card-badge-${status}`} aria-label={`Badge status: ${status}`}>
      {content}
    </span>
  );
};

export default CardBadge;