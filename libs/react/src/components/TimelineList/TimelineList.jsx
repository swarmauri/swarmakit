import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimelineContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const TimelineItem = styled.li`
  padding: 10px 20px;
  border-left: 3px solid ${({ isActive, isCompleted }) => (isCompleted ? '#4caf50' : isActive ? '#2196f3' : '#ddd')};
  position: relative;
  background-color: ${({ isActive }) => (isActive ? '#e3f2fd' : 'transparent')};
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TimelineList = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item) => (
        <TimelineItem key={item.id} isActive={item.isActive} isCompleted={item.isCompleted}>
          {item.label}
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

TimelineList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
};

export default TimelineList;