// AttachmentIcon.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './AttachmentIcon.css';

const AttachmentIcon = ({ state, onClick }) => {
  return (
    <div
      className={`attachment-icon ${state}`}
      onClick={state !== 'disabled' ? onClick : undefined}
    >
      📎
    </div>
  );
};

AttachmentIcon.propTypes = {
  state: PropTypes.oneOf(['enabled', 'disabled', 'hovered', 'clicked']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AttachmentIcon;