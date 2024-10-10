import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableWrapper = styled.div`
  overflow-x: auto;
  max-width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #dfe6e9;
  border: 1px solid #b2bec3;
  padding: 10px;
`;

const Td = styled.td`
  border: 1px solid #b2bec3;
  padding: 10px;
`;

const LoadingMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #636e72;
`;

const DataTable = ({ data, columns, loading }) => {
  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (!data.length) {
    return <LoadingMessage>No data available</LoadingMessage>;
  }

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <Th key={index}>{column}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <Td key={colIndex}>{row[column]}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
};

DataTable.defaultProps = {
  data: [],
  columns: [],
  loading: false,
};

export default DataTable;