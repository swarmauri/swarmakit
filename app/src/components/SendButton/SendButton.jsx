// SendButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './SendButton.css';

const SendButton = ({ state, onClick }) => {
  return (
    <button
      className={`send-button ${state}`}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      Send
    </button>
  );
};

SendButton.propTypes = {
  state: PropTypes.oneOf(['enabled', 'disabled', 'hovered', 'clicked']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SendButton;