import React from 'react';
import PropTypes from 'prop-types';
import './VisualCueForAccessibilityFocusIndicator.css';

const VisualCueForAccessibilityFocusIndicator = ({ isFocused, label }) => {
  return (
    <div className={`visual-cue ${isFocused ? 'focused' : 'unfocused'}`}>
      {label}
    </div>
  );
};

VisualCueForAccessibilityFocusIndicator.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

VisualCueForAccessibilityFocusIndicator.defaultProps = {
  isFocused: false,
  label: 'Focus indicator',
};

export default VisualCueForAccessibilityFocusIndicator;