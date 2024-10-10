import React from 'react';
import PropTypes from 'prop-types';
import './ProgressCircle.css';

const ProgressCircle = ({ progress, state }) => {
  const circleClass = `progress-circle ${state}`;

  return (
    <div className={circleClass}>
      <svg className="progress-svg" viewBox="0 0 36 36">
        <path
          className="progress-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="progress-bar"
          strokeDasharray={`${progress}, 100`}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

ProgressCircle.propTypes = {
  progress: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['complete', 'incomplete', 'paused', 'active']),
};

ProgressCircle.defaultProps = {
  state: 'active',
};

export default ProgressCircle;