// MessageInputBox.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MessageInputBox.css';

const MessageInputBox = ({ state, value, onChange, onFocus, onBlur }) => {
  return (
    <input
      type="text"
      className={`message-input-box ${state}`}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder="Type a message..."
    />
  );
};

MessageInputBox.propTypes = {
  state: PropTypes.oneOf(['focused', 'unfocused', 'typing', 'empty']).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default MessageInputBox;