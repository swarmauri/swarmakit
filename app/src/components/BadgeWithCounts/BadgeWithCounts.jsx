import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BadgeWithCountsContainer = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 12px;
  font-size: 0.75em;
  color: white;
  background-color: ${(props) => {
    if (props.count === 0) return '#e0e0e0';
    if (props.count > 99) return '#e74c3c';
    return '#3498db';
  }};
`;

const BadgeWithCounts = ({ count }) => {
  const displayCount = count > 99 ? '99+' : count;
  return <BadgeWithCountsContainer count={count}>{displayCount}</BadgeWithCountsContainer>;
};

BadgeWithCounts.propTypes = {
  count: PropTypes.number.isRequired,
};

BadgeWithCounts.defaultProps = {
  count: 0,
};

export default BadgeWithCounts;