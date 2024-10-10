import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
`;

const GroupHeader = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
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
  background-color: ${({ selected }) => (selected ? '#d0eaff' : '#fff')};
  &:hover {
    background-color: #e6f7ff;
  }
`;

const GroupedList = ({ groups }) => {
  const [expandedGroups, setExpandedGroups] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleGroup = (groupName) => {
    setExpandedGroups({
      ...expandedGroups,
      [groupName]: !expandedGroups[groupName],
    });
  };

  return (
    <ListContainer>
      {Object.keys(groups).map((groupName) => (
        <div key={groupName}>
          <GroupHeader onClick={() => toggleGroup(groupName)}>
            {groupName}
          </GroupHeader>
          {expandedGroups[groupName] && (
            <List>
              {groups[groupName].map((item, index) => (
                <ListItem
                  key={index}
                  selected={selectedItem === item}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          )}
        </div>
      ))}
    </ListContainer>
  );
};

GroupedList.propTypes = {
  groups: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default GroupedList;