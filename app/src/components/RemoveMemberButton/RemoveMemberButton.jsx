// RemoveMemberButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './RemoveMemberButton.css';

const RemoveMemberButton = ({ isEnabled, onClick }) => {
  return (
    <button 
      className={`remove-member-button ${isEnabled ? 'enabled' : 'disabled'}`} 
      onClick={isEnabled ? onClick : null}
      disabled={!isEnabled}
    >
      Remove Member
    </button>
  );
};

RemoveMemberButton.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

RemoveMemberButton.defaultProps = {
  onClick: () => {},
};

export default RemoveMemberButton;