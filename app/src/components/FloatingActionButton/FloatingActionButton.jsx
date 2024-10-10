import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FloatingActionButton.css';

const FloatingActionButton = ({ icon, expandedIcon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <button
      className={`floating-action-button ${isExpanded ? 'expanded' : 'collapsed'}`}
      onClick={toggleExpand}
    >
      {isExpanded ? expandedIcon : icon}
    </button>
  );
};

FloatingActionButton.propTypes = {
  icon: PropTypes.node.isRequired,
  expandedIcon: PropTypes.node.isRequired,
};

export default FloatingActionButton;