import React from 'react';
import PropTypes from 'prop-types';
import './ActionableList.css';

const ActionableList = ({ items, onAction, isLoading, isDisabled }) => {
  const handleAction = (item) => {
    if (!isDisabled && !isLoading) {
      onAction(item);
    }
  };

  return (
    <div className={`actionable-list ${isDisabled ? 'disabled' : ''}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`actionable-item ${isLoading ? 'loading' : ''}`}
          onClick={() => handleAction(item)}
        >
          <div className="actionable-item-content">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

ActionableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAction: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

ActionableList.defaultProps = {
  isLoading: false,
  isDisabled: false,
};

export default ActionableList;