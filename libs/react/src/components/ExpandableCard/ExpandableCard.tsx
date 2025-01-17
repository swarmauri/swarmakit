import React, { useState } from 'react';
import './ExpandableCard.css';

interface ExpandableCardProps {
  title: string;
  content: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`expandable-card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="expandable-card-header" onClick={toggleExpansion} role="button" aria-expanded={isExpanded}>
        <h2 className="expandable-card-title">{title}</h2>
      </div>
      <div className="expandable-card-content">
        {isExpanded && <p>{content}</p>}
      </div>
    </div>
  );
};

export default ExpandableCard;