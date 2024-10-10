import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  background-color: #fff;
`;

const Message = styled.div`
  padding: 10px;
  color: #666;
`;

const FilterableList = ({ items }) => {
  const [filter, setFilter] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListContainer>
      <Input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <List>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <ListItem key={index}>{item}</ListItem>)
        ) : (
          <Message>No results found</Message>
        )}
      </List>
    </ListContainer>
  );
};

FilterableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterableList;