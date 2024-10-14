import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

const Tooltip = ({ isVisible, content, type, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      {isVisible && <div className={`tooltip-content ${type}`}>{content}</div>}
    </div>
  );
};

Tooltip.propTypes = {
  isVisible: PropTypes.bool,
  content: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['default', 'error', 'information']),
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  isVisible: false,
  type: 'default',
};

export default Tooltip;