import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  width: ${({ isCollapsed }) => (isCollapsed ? '80px' : '250px')};
  transition: width 0.3s ease;
  background-color: #444;
  color: white;
  height: 100vh;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  &:hover {
    width: ${({ isHovered }) => (isHovered ? '300px' : 'inherit')};
  }
`;

const SidebarContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = ({ isVisible, isCollapsed, isHovered }) => {
  return (
    <SidebarWrapper isVisible={isVisible} isCollapsed={isCollapsed} isHovered={isHovered}>
      <SidebarContent>
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </SidebarContent>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  isHovered: PropTypes.bool,
};

Sidebar.defaultProps = {
  isVisible: true,
  isCollapsed: false,
  isHovered: false,
};

export default Sidebar;