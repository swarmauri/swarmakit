import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const GridItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const DataGrid = ({ data, columns, paginated, onSearch, resizable }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      {onSearch && (
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
        />
      )}
      <GridContainer columns={columns}>
        {data.map((item, index) => (
          <GridItem key={index}>
            {Object.values(item).map((value, idx) => (
              <div key={idx}>{value}</div>
            ))}
          </GridItem>
        ))}
      </GridContainer>
      {paginated && (
        <Pagination>
          <button disabled>Previous</button>
          <button>Next</button>
        </Pagination>
      )}
    </div>
  );
};

DataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.number,
  paginated: PropTypes.bool,
  onSearch: PropTypes.func,
  resizable: PropTypes.bool,
};

DataGrid.defaultProps = {
  columns: 3,
  paginated: false,
  resizable: false,
};

export default DataGrid;