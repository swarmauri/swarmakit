import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#e0f3ff' : 'white')};
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const StarIcon = styled.span`
  margin-right: 10px;
  color: ${({ starred }) => (starred ? '#ffd700' : '#ccc')};
  cursor: pointer;
`;

const FavoritesList = ({ items }) => {
  const [starredIndex, setStarredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleStarClick = (index) => {
    setStarredIndex(starredIndex === index ? null : index);
  };

  const handleSelectClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onDoubleClick={() => handleSelectClick(index)}
          selected={selectedIndex === index}
        >
          <StarIcon
            starred={starredIndex === index}
            onClick={() => handleStarClick(index)}
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
    })
  ).isRequired,
};

export default FavoritesList;