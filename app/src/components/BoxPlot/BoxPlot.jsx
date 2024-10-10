import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoxPlotContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BoxPlot = ({ data, isLoading, tooltipData, isHovered, isClicked }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <BoxPlotContainer>
      {/* Box plot rendering logic */}
    </BoxPlotContainer>
  );
};

BoxPlot.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      median: PropTypes.number.isRequired,
      q1: PropTypes.number.isRequired,
      q3: PropTypes.number.isRequired,
    })
  ),
  isLoading: PropTypes.bool,
  tooltipData: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
    median: PropTypes.number,
    q1: PropTypes.number,
    q3: PropTypes.number,
  }),
  isHovered: PropTypes.bool,
  isClicked: PropTypes.bool,
};

export default BoxPlot;