import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="tabs" role="tablist">
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            aria-disabled={tab.disabled}
            onClick={() => handleClick(index, tab.disabled)}
            className={`tab-item ${activeIndex === index ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content" role="tabpanel">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export default Tabs;