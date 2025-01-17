import React, { useState } from 'react';
import './CardBody.css';

interface CardBodyProps {
  content: string;
  expandable?: boolean;
  initialExpanded?: boolean;
}

const CardBody: React.FC<CardBodyProps> = ({ content, expandable = false, initialExpanded = false }) => {
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <div className={`card-body ${expandable ? 'expandable' : ''} ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="content" aria-expanded={expanded}>
        {content}
      </div>
      {expandable && (
        <button onClick={() => setExpanded(!expanded)} aria-label={expanded ? 'Collapse content' : 'Expand content'}>
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      )}
    </div>
  );
};

export default CardBody;