import React from 'react';
import PropTypes from 'prop-types';
import './Chips.css';

const Chips = ({ label, isSelectable, isRemovable, onRemove }) => {
  return (
    <div className={`chip ${isSelectable ? 'selectable' : ''}`}>
      {label}
      {isRemovable && (
        <button className="remove-button" onClick={onRemove}>
          &times;
        </button>
      )}
    </div>
  );
};

Chips.propTypes = {
  label: PropTypes.string.isRequired,
  isSelectable: PropTypes.bool,
  isRemovable: PropTypes.bool,
  onRemove: PropTypes.func,
};

Chips.defaultProps = {
  isSelectable: false,
  isRemovable: false,
  onRemove: () => {},
};

export default Chips;