import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  background-color: white;
`;

const FilterableList = ({ items }) => {
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Container>
      <Input 
        type="text" 
        placeholder="Filter items..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ListContainer>
        {filteredItems.length ? (
          filteredItems.map((item, index) => (
            <ListItem key={index}>{item.title}</ListItem>
          ))
        ) : (
          <ListItem>No results found</ListItem>
        )}
      </ListContainer>
    </Container>
  );
};

FilterableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FilterableList;