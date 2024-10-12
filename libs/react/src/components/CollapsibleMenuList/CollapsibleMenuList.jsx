import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 100%;
`;

const MenuItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  background: ${({ active }) => (active ? '#e0e0e0' : '#fff')};
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const SubMenu = styled.div`
  padding-left: 20px;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

const CollapsibleMenuList = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <MenuWrapper>
      {menuItems.map((item, index) => (
        <div key={index}>
          <MenuItem active={activeIndex === index} onClick={() => toggleSubMenu(index)}>
            {item.label}
          </MenuItem>
          <SubMenu expanded={activeIndex === index}>
            {item.subItems.map((subItem, subIndex) => (
              <div key={subIndex}>{subItem}</div>
            ))}
          </SubMenu>
        </div>
      ))}
    </MenuWrapper>
  );
};

CollapsibleMenuList.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default CollapsibleMenuList;