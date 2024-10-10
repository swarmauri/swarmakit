import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${({ isActive }) => (isActive ? '#e0f7fa' : 'transparent')};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  &:hover {
    background-color: ${({ isActive, isDisabled }) => (!isActive && !isDisabled ? '#f0f0f0' : '')};
  }
`;

const Tabs = ({ tabs, disabled }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    if (!disabled) {
      setActiveTab(id);
    }
  };

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          isActive={activeTab === tab.id}
          isDisabled={disabled}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </Tab>
      ))}
    </TabsContainer>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  disabled: PropTypes.bool,
};

Tabs.defaultProps = {
  disabled: false,
};

export default Tabs;