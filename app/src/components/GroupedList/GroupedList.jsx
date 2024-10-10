import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const GroupHeader = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const GroupContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  background-color: ${({ selected }) => (selected ? '#e0e0e0' : 'white')};
  &:hover {
    background-color: #f5f5f5;
  }
`;

const GroupedList = ({ groups }) => {
  const [expandedGroups, setExpandedGroups] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleGroup = (groupName) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  return (
    <Container>
      {groups.map((group, index) => (
        <div key={index}>
          <GroupHeader onClick={() => toggleGroup(group.name)}>
            {group.name}
            <span>{expandedGroups[group.name] ? '-' : '+'}</span>
          </GroupHeader>
          <GroupContent expanded={expandedGroups[group.name]}>
            {group.items.map((item, idx) => (
              <ListItem
                key={idx}
                selected={selectedItem === item.title}
                onClick={() => setSelectedItem(item.title)}
              >
                {item.title}
              </ListItem>
            ))}
          </GroupContent>
        </div>
      ))}
    </Container>
  );
};

GroupedList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default GroupedList;