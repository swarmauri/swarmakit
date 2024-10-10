import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimelineContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TimelineItem = styled.li`
  position: relative;
  padding: 10px 20px;
  border-left: 2px solid #ccc;
  margin-left: 20px;
  color: ${props => (props.isActive ? '#007bff' : props.isCompleted ? '#28a745' : '#333')};

  &:before {
    content: '';
    position: absolute;
    left: -10px;
    top: 15px;
    width: 10px;
    height: 10px;
    background-color: ${props => (props.isActive ? '#007bff' : props.isCompleted ? '#28a745' : '#ccc')};
    border-radius: 50%;
  }

  &:hover {
    color: ${props => (!props.isCompleted && !props.isActive ? '#555' : null)};
  }
`;

const Timelinelist = ({ items }) => (
  <TimelineContainer>
    {items.map(item => (
      <TimelineItem key={item.id} isActive={item.isActive} isCompleted={item.isCompleted}>
        {item.content}
      </TimelineItem>
    ))}
  </TimelineContainer>
);

Timelinelist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
};

export default Timelinelist;