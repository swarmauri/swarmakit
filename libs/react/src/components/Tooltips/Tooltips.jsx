import React from 'react';
import PropTypes from 'prop-types';
import './Tooltips.css';

const Tooltips = ({ text, position, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className={`tooltip-text tooltip-${position}`}>{text}</span>
    </div>
  );
};

Tooltips.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  children: PropTypes.node.isRequired,
};

Tooltips.defaultProps = {
  position: 'top',
};

export default Tooltips;