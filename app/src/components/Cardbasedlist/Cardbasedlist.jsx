import React from 'react';
import PropTypes from 'prop-types';
import './CardBasedList.css';

const CardBasedList = ({ items, onSelect, selectedItem, isDisabled }) => {
  const handleSelect = (item) => {
    if (!isDisabled) {
      onSelect(item);
    }
  };

  return (
    <div className={`card-based-list ${isDisabled ? 'disabled' : ''}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`card-item ${selectedItem === item ? 'selected' : ''}`}
          onClick={() => handleSelect(item)}
        >
          <div className="card-item-content">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

CardBasedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
  isDisabled: PropTypes.bool,
};

CardBasedList.defaultProps = {
  selectedItem: null,
  isDisabled: false,
};

export default CardBasedList;