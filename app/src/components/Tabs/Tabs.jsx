import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ tabs, defaultActiveIndex, isDisabled }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index) => {
    if (!isDisabled) {
      setActiveIndex(index);
    }
  };

  return (
    <div className={`tabs-container ${isDisabled ? 'disabled' : ''}`}>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultActiveIndex: PropTypes.number,
  isDisabled: PropTypes.bool,
};

Tabs.defaultProps = {
  defaultActiveIndex: 0,
  isDisabled: false,
};

export default Tabs;