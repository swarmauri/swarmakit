import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuListContainer = styled.div`
  width: 100%;
`;

const MenuItem = styled.div`
  padding: 10px;
  background-color: ${({ active }) => (active ? '#e0e0e0' : '#f7f7f7')};
  cursor: pointer;
  &:hover {
    background-color: #d0d0d0;
  }
`;

const SubMenu = styled.div`
  max-height: ${({ expanded }) => (expanded ? '100px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const CollapsibleMenuList = ({ menuItems }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <MenuListContainer>
      {menuItems.map((item, index) => (
        <div key={index}>
          <MenuItem
            active={expandedIndex === index}
            onClick={() => toggleExpand(index)}
          >
            {item.label}
          </MenuItem>
          <SubMenu expanded={expandedIndex === index}>
            {item.subItems.map((subItem, subIndex) => (
              <div key={subIndex} style={{ paddingLeft: '20px', padding: '5px 0' }}>
                {subItem}
              </div>
            ))}
          </SubMenu>
        </div>
      ))}
    </MenuListContainer>
  );
};

CollapsibleMenuList.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default CollapsibleMenuList;