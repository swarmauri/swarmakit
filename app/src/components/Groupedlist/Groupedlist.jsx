import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const GroupContainer = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const GroupHeader = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
`;

const GroupContent = styled.div`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  background-color: #fff;
`;

const Item = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: ${(props) => (props.selected ? '#e0f7fa' : '#fff')};
  &:hover {
    background-color: #f0f0f0;
  }
`;

const GroupedList = ({ groups }) => {
  const [expandedGroups, setExpandedGroups] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleGroup = (index) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Container>
      {groups.map((group, index) => (
        <GroupContainer key={index}>
          <GroupHeader onClick={() => toggleGroup(index)}>
            {group.title}
          </GroupHeader>
          <GroupContent expanded={expandedGroups[index]}>
            {group.items.map((item, subIndex) => (
              <Item
                key={subIndex}
                selected={selectedItem === item}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </Item>
            ))}
          </GroupContent>
        </GroupContainer>
      ))}
    </Container>
  );
};

GroupedList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default GroupedList;