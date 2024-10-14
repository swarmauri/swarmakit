// MemberMention.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MemberMention.css';

const MemberMention = ({ isVisible, isClicked, memberName }) => {
  let statusClass = 'hidden';
  if (isVisible) {
    statusClass = isClicked ? 'clicked' : 'visible';
  }

  return (
    <span className={`member-mention ${statusClass}`}>
      @{memberName}
    </span>
  );
};

MemberMention.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isClicked: PropTypes.bool.isRequired,
  memberName: PropTypes.string.isRequired,
};

export default MemberMention;