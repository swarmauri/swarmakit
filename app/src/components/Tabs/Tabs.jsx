import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            className={`tab-item ${activeTab === tab.label ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) =>
          activeTab === tab.label ? <div key={tab.label}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

Tabs.defaultProps = {
  tabs: [],
};

export default Tabs;