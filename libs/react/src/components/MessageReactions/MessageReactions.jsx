// MessageReactions.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MessageReactions.css';

const MessageReactions = ({ state, reactions }) => {
  return (
    <div className={`message-reactions ${state}`}>
      {state !== 'unavailable' && reactions.map((reaction, index) => (
        <span key={index} className="reaction">
          {reaction}
        </span>
      ))}
    </div>
  );
};

MessageReactions.propTypes = {
  state: PropTypes.oneOf(['available', 'unavailable', 'hovered', 'clicked']).isRequired,
  reactions: PropTypes.arrayOf(PropTypes.string),
};

export default MessageReactions;