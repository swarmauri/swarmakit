import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpandableListItem.css';

const ExpandableListItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-list-item">
      <div className="list-item-header" onClick={toggleExpand}>
        <h4 className="list-item-title">{title}</h4>
        <span className="expand-icon">{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && <div className="list-item-content">{content}</div>}
    </div>
  );
};

ExpandableListItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default ExpandableListItem;