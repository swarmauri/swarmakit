// ChartComponents.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import './ChartComponents.css';

const ChartComponents = ({ data, options }) => {
  return (
    <div className="chart-components">
      <Line data={data} options={options} />
    </div>
  );
};

ChartComponents.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default ChartComponents;