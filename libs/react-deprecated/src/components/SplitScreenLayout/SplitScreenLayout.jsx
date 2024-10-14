import React from 'react';
import PropTypes from 'prop-types';
import './SplitScreenLayout.css';

const SplitScreenLayout = ({ leftContent, rightContent, leftWidth = '50%', rightWidth = '50%' }) => {
  return (
    <div className="split-screen-layout">
      <div className="left-pane" style={{ width: leftWidth }}>
        {leftContent}
      </div>
      <div className="right-pane" style={{ width: rightWidth }}>
        {rightContent}
      </div>
    </div>
  );
};

SplitScreenLayout.propTypes = {
  leftContent: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
  leftWidth: PropTypes.string,
  rightWidth: PropTypes.string,
};

export default SplitScreenLayout;