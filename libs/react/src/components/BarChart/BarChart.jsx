import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BarChart = ({ data, isLoading, isStacked, isGrouped, hoveredBar, clickedBar }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <ChartContainer>
      {/* Chart logic and rendering */}
      {(hoveredBar || clickedBar) && <div className="tooltip">Bar Info</div>}
    </ChartContainer>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
  isStacked: PropTypes.bool,
  isGrouped: PropTypes.bool,
  hoveredBar: PropTypes.object,
  clickedBar: PropTypes.object,
};

export default BarChart;