import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeatmapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Heatmap = ({ data, isLoading, zoomLevel, tooltipData, hoveredCell }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <HeatmapContainer>
      {/* Heatmap rendering logic */}
    </HeatmapContainer>
  );
};

Heatmap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  isLoading: PropTypes.bool,
  zoomLevel: PropTypes.number,
  tooltipData: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    value: PropTypes.number,
  }),
  hoveredCell: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

export default Heatmap;