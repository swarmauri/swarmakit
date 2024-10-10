import React from 'react';
import PropTypes from 'prop-types';
import './Popover.css';

const Popover = ({ isVisible, content, children }) => {
  return (
    <div className="popover-container">
      {children}
      {isVisible && <div className="popover-content">{content}</div>}
    </div>
  );
};

Popover.propTypes = {
  isVisible: PropTypes.bool,
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

Popover.defaultProps = {
  isVisible: false,
};

export default Popover;