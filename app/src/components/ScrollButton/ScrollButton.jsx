// ScrollButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ScrollButton.css';

const ScrollButton = ({ state, onClick }) => {
  return (
    <button 
      className={`scroll-button ${state}`} 
      onClick={onClick}
    >
      Scroll
    </button>
  );
};

ScrollButton.propTypes = {
  state: PropTypes.oneOf(['visible', 'hidden', 'hovered', 'clicked']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ScrollButton;