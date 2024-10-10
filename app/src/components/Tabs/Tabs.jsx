import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background-color: ${props => (props.isActive ? '#fff' : '#f9f9f9')};
  border: none;
  border-bottom: ${props => (props.isActive ? '2px solid #007bff' : 'none')};
  cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
  color: ${props => (props.isDisabled ? '#999' : '#333')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.isDisabled ? '#f9f9f9' : '#e9ecef')};
  }
`;

const Content = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const Tabs = ({ tabs, isDisabled }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <TabsContainer>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => !isDisabled && setActiveTab(tab.id)}
            isDisabled={isDisabled}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsContainer>
      <Content>
        {tabs.find(tab => tab.id === activeTab)?.content}
      </Content>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDisabled: PropTypes.bool,
};

Tabs.defaultProps = {
  isDisabled: false,
};

export default Tabs;