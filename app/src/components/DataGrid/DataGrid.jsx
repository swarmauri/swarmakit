import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  overflow-x: auto;
  padding: 10px;
`;

const GridItem = styled.div`
  background-color: #dfe6e9;
  padding: 10px;
  border: 1px solid #b2bec3;
  text-align: center;
`;

const LoadingMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #636e72;
`;

const DataGrid = ({ data, loading }) => {
  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (!data.length) {
    return <LoadingMessage>No data available</LoadingMessage>;
  }

  return (
    <GridWrapper>
      {data.map((item, index) => (
        <GridItem key={index}>{item}</GridItem>
      ))}
    </GridWrapper>
  );
};

DataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
};

DataGrid.defaultProps = {
  data: [],
  loading: false,
};

export default DataGrid;