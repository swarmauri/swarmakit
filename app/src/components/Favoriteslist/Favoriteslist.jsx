import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#e0e0e0' : '#fff')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StarIcon = styled.span`
  color: ${props => (props.starred ? '#ffd700' : '#ccc')};
  margin-right: 10px;
`;

const FavoritesList = ({ items }) => {
  const [starredIndex, setStarredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = index => {
    setSelectedIndex(index);
  };

  const handleStarClick = index => {
    setStarredIndex(starredIndex === index ? null : index);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onClick={() => handleItemClick(index)}
          selected={selectedIndex === index}
        >
          <StarIcon
            starred={starredIndex === index}
            onClick={e => {
              e.stopPropagation();
              handleStarClick(index);
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
    })
  ).isRequired,
};

export default FavoritesList;