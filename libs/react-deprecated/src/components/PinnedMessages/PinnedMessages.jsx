// PinnedMessages.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './PinnedMessages.css';

const PinnedMessages = ({ isPinned, isVisible, message }) => {
  let statusClass = 'unpinned hidden';
  if (isVisible) {
    statusClass = isPinned ? 'pinned visible' : 'unpinned visible';
  }

  return (
    <div className={`pinned-message ${statusClass}`}>
      {message}
    </div>
  );
};

PinnedMessages.propTypes = {
  isPinned: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default PinnedMessages;