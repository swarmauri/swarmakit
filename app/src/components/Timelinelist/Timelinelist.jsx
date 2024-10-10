import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimelineContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const TimelineItem = styled.li`
  position: relative;
  padding: 20px;
  background-color: ${(props) =>
    props.completed ? '#d4edda' : props.active ? '#cce5ff' : '#f8f9fa'};
  border-left: 4px solid ${(props) => (props.completed ? '#28a745' : '#007bff')};
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      !props.completed && !props.active ? '#e2e3e5' : ''};
  }
`;

const TimelineContent = styled.div`
  margin-left: 20px;
`;

const Timelinelist = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          active={item.active}
          completed={item.completed}
        >
          <TimelineContent>{item.content}</TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

Timelinelist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      active: PropTypes.bool,
      completed: PropTypes.bool,
    })
  ).isRequired,
};

export default Timelinelist;