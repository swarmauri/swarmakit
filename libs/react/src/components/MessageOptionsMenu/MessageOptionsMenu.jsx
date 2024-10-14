// MessageOptionsMenu.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MessageOptionsMenu.css';

const MessageOptionsMenu = ({ state, options }) => {
  return (
    <div className={`message-options-menu ${state}`}>
      {state === 'visible' && options.map((option, index) => (
        <div key={index} className="option">
          {option}
        </div>
      ))}
    </div>
  );
};

MessageOptionsMenu.propTypes = {
  state: PropTypes.oneOf(['visible', 'hidden', 'clicked']).isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default MessageOptionsMenu;