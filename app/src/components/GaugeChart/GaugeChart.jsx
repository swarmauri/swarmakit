import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GaugeChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const GaugeChart = ({ value, max, min, isLoading, tooltipData }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (value === null || value === undefined) {
    return <div>No data available</div>;
  }

  return (
    <GaugeChartContainer>
      {/* Gauge chart rendering logic */}
    </GaugeChartContainer>
  );
};

GaugeChart.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
  tooltipData: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default GaugeChart;