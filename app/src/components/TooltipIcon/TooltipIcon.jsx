import React from 'react';
import PropTypes from 'prop-types';
import './TooltipIcon.css';

const TooltipIcon = ({ icon, tooltipText, position }) => (
  <div className="tooltip-icon-container">
    <div className="icon">{icon}</div>
    <span className={`tooltip-text ${position}`}>{tooltipText}</span>
  </div>
);

TooltipIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltipText: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

TooltipIcon.defaultProps = {
  position: 'top',
};

export default TooltipIcon;