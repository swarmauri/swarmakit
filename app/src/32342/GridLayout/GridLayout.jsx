import React from 'react';
import PropTypes from 'prop-types';
import './GridLayout.css';

const GridLayout = ({ columns, gap, children }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap,
  };

  return <div className="grid-layout" style={gridStyle}>{children}</div>;
};

GridLayout.propTypes = {
  columns: PropTypes.number,
  gap: PropTypes.string,
  children: PropTypes.node.isRequired,
};

GridLayout.defaultProps = {
  columns: 3,
  gap: '10px',
};

export default GridLayout;