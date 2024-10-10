import React from 'react';
import PropTypes from 'prop-types';
import './Tooltips.css';

const Tooltips = ({ text, position, children, className }) => {
  return (
    <div className={`tooltip-container ${className}`}>
      {children}
      <span className={`tooltip-text tooltip-${position}`}>{text}</span>
    </div>
  );
};

Tooltips.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Tooltips.defaultProps = {
  position: 'top',
  className: '',
};

export default Tooltips;