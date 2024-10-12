import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'relative')};
  top: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: ${({ isCollapsed }) => (isCollapsed ? '10px' : '20px')};
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  transition: padding 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ isVisible, isSticky, isCollapsed }) => {
  return (
    <HeaderWrapper isVisible={isVisible} isSticky={isSticky} isCollapsed={isCollapsed}>
      <HeaderContent>
        <div>Logo</div>
        <nav>Navigation</nav>
      </HeaderContent>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isVisible: PropTypes.bool,
  isSticky: PropTypes.bool,
  isCollapsed: PropTypes.bool,
};

Header.defaultProps = {
  isVisible: true,
  isSticky: false,
  isCollapsed: false,
};

export default Header;