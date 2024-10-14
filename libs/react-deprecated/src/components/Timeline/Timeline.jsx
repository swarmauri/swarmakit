import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 2px solid #636e72;
  padding-left: 20px;
`;

const Event = styled.div`
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
  &:before {
    content: '';
    position: absolute;
    left: -11px;
    top: 5px;
    width: 10px;
    height: 10px;
    background-color: #0984e3;
    border-radius: 50%;
  }
`;

const Timeline = ({ events, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <TimelineWrapper>
      {events.map((event, index) => (
        <Event key={index}>{event}</Event>
      ))}
    </TimelineWrapper>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.string),
  visible: PropTypes.bool,
};

Timeline.defaultProps = {
  events: [],
  visible: true,
};

export default Timeline;