import React from 'react';

interface TabItem {
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

interface TabBarNavigationMobileProps {
  tabs: TabItem[];
  onTabClick: (index: number) => void;
}

const TabBarNavigationMobile: React.FC<TabBarNavigationMobileProps> = ({ tabs, onTabClick }) => {
  return (
    <nav aria-label="Mobile Tab Bar Navigation" className="tab-bar-navigation">
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li key={index} className={`tab-item ${tab.isActive ? 'active' : ''} ${tab.isDisabled ? 'disabled' : ''}`}>
            <button
              onClick={() => !tab.isDisabled && onTabClick(index)}
              disabled={tab.isDisabled}
              aria-disabled={tab.isDisabled}
              aria-current={tab.isActive ? 'page' : undefined}
              className="tab-button"
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabBarNavigationMobile;