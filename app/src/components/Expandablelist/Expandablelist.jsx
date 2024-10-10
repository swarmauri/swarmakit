import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpandableList.css';

const ExpandableList = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul className="expandable-list">
      {items.map((item, index) => (
        <li
          key={index}
          className={`list-item ${
            expandedIndex === index ? 'expanded' : ''
          } ${selectedIndex === index ? 'selected' : ''}`}
          onClick={() => handleSelect(index)}
        >
          <div
            className="item-header"
            onClick={() => handleExpand(index)}
          >
            {item.title}
          </div>
          {expandedIndex === index && <div className="item-content">{item.content}</div>}
        </li>
      ))}
    </ul>
  );
};

ExpandableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExpandableList;