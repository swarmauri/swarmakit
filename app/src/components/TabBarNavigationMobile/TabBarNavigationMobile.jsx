import React from 'react';
import PropTypes from 'prop-types';
import './TabBarNavigationMobile.css';

const TabBarNavigationMobile = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="tab-bar-navigation-mobile">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-button ${activeTab === index ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
          onClick={() => !tab.disabled && onTabClick(index)}
          disabled={tab.disabled}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

TabBarNavigationMobile.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  activeTab: PropTypes.number,
  onTabClick: PropTypes.func.isRequired,
};

export default TabBarNavigationMobile;