import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#e3f2fd' : '#fff')};
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const StarIcon = styled.span`
  margin-right: 10px;
  color: ${({ starred }) => (starred ? '#ffd700' : '#ccc')};
  font-size: 20px;
  cursor: pointer;
`;

const FavoritesList = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleStar = (index) => {
    items[index].starred = !items[index].starred;
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          selected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        >
          <StarIcon
            starred={item.starred}
            onClick={(e) => {
              e.stopPropagation();
              toggleStar(index);
            }}
          >
            ★
          </StarIcon>
          {item.title}
        </ListItem>
      ))}
    </ListContainer>
  );
};

FavoritesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      starred: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FavoritesList;