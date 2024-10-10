// GroupChatName.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './GroupChatName.css';

const GroupChatName = ({ name, isVisible, isEdited }) => {
  return (
    <div className={`group-chat-name ${isVisible ? 'displayed' : 'hidden'} ${isEdited ? 'edited' : ''}`}>
      {isVisible && <span>{name}</span>}
    </div>
  );
};

GroupChatName.propTypes = {
  name: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  isEdited: PropTypes.bool,
};

GroupChatName.defaultProps = {
  isEdited: false,
};

export default GroupChatName;