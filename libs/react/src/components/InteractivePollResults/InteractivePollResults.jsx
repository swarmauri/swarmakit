import React from 'react';
import PropTypes from 'prop-types';
import './InteractivePollResults.css';

const InteractivePollResults = ({ results, status }) => {
  return (
    <div className={`poll-results ${status.toLowerCase()}`}>
      {results.map((result, index) => (
        <div key={index} className="poll-option">
          <span className="option-label">{result.option}</span>
          <span className="option-percentage">{result.percentage}%</span>
          <div className="progress-bar" style={{ width: `${result.percentage}%` }} />
        </div>
      ))}
    </div>
  );
};

InteractivePollResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  status: PropTypes.oneOf(['Live Results', 'Completed', 'Closed']).isRequired,
};

export default InteractivePollResults;