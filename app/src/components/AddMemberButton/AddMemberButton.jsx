// AddMemberButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './AddMemberButton.css';

const AddMemberButton = ({ isEnabled, onClick }) => {
  return (
    <button 
      className={`add-member-button ${isEnabled ? 'enabled' : 'disabled'}`} 
      onClick={isEnabled ? onClick : null}
      disabled={!isEnabled}
    >
      Add Member
    </button>
  );
};

AddMemberButton.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

AddMemberButton.defaultProps = {
  onClick: () => {},
};

export default AddMemberButton;