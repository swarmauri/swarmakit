import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
`;

const Tab = styled.button`
  padding: 10px 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) =>
    props.active ? '#fff' : props.hover ? '#f9f9f9' : '#efefef'};
  border: none;
  border-bottom: ${(props) => (props.active ? '2px solid #007bff' : 'none')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (!props.disabled && !props.active ? '#f9f9f9' : '')};
  }
`;

const TabContent = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
`;

const Tabs = ({ tabs, initialActiveIndex, disabled }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  return (
    <div>
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            active={activeIndex === index}
            disabled={disabled}
            onClick={() => !disabled && setActiveIndex(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabContainer>
      <TabContent>{tabs[activeIndex].content}</TabContent>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  initialActiveIndex: PropTypes.number,
  disabled: PropTypes.bool,
};

Tabs.defaultProps = {
  initialActiveIndex: 0,
  disabled: false,
};

export default Tabs;