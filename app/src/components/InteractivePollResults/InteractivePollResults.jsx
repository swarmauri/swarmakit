import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PollContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  width: 300px;
`;

const Option = styled.div`
  margin-bottom: 10px;
`;

const Bar = styled.div`
  height: 20px;
  background-color: ${({ color }) => color};
  width: ${({ percentage }) => percentage}%;
  transition: width 0.3s ease;
`;

const InteractivePollResults = ({ options, totalVotes, status }) => {
  return (
    <PollContainer>
      {options.map((option) => (
        <Option key={option.label}>
          <div>{option.label} - {option.votes} votes</div>
          <Bar color={option.color} percentage={(option.votes / totalVotes) * 100} />
        </Option>
      ))}
      <div>Status: {status}</div>
    </PollContainer>
  );
};

InteractivePollResults.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  totalVotes: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['Live Results', 'Completed', 'Closed']).isRequired,
};

export default InteractivePollResults;