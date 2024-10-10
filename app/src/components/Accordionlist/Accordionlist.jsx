import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AccordionList.css';

const AccordionList = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="accordion-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${expandedIndex === index ? 'expanded' : 'collapsed'}`}
          onClick={() => toggleItem(index)}
        >
          <div className="accordion-item-header">{item.title}</div>
          {expandedIndex === index && <div className="accordion-item-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

AccordionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AccordionList;