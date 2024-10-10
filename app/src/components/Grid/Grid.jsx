import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 16px;
  width: 100%;
  height: ${({ isStretched }) => (isStretched ? '100vh' : 'auto')};
  align-items: ${({ isAligned }) => (isAligned ? 'center' : 'start')};
`;

const GridItem = styled.div`
  background-color: #ddd;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const Grid = ({ columns, items, isStretched, isAligned }) => {
  return (
    <GridWrapper columns={columns} isStretched={isStretched} isAligned={isAligned}>
      {items.map((item, index) => (
        <GridItem key={index}>{item}</GridItem>
      ))}
    </GridWrapper>
  );
};

Grid.propTypes = {
  columns: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.node),
  isStretched: PropTypes.bool,
  isAligned: PropTypes.bool,
};

Grid.defaultProps = {
  columns: 3,
  items: [],
  isStretched: false,
  isAligned: false,
};

export default Grid;