import React from 'react';
import PropTypes from 'prop-types';
import './BadgeWithCounts.css';

const BadgeWithCounts = ({ count, maxCount }) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count;

  return (
    <span className="badge-with-counts">
      {displayCount}
    </span>
  );
};

BadgeWithCounts.propTypes = {
  count: PropTypes.number.isRequired,
  maxCount: PropTypes.number,
};

BadgeWithCounts.defaultProps = {
  maxCount: 99,
};

export default BadgeWithCounts;