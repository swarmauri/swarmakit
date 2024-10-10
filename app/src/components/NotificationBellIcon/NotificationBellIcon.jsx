import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BellIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: ${({ hasNotifications }) => (hasNotifications ? '#ff7979' : '#bdc3c7')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    width: 10px;
    height: 10px;
    background-color: ${({ hasNotifications }) => (hasNotifications ? '#ffbe76' : 'transparent')};
    border-radius: 50%;
  }
`;

const NotificationBellIcon = ({ hasNotifications }) => {
  return <BellIcon hasNotifications={hasNotifications} />;
};

NotificationBellIcon.propTypes = {
  hasNotifications: PropTypes.bool,
};

NotificationBellIcon.defaultProps = {
  hasNotifications: false,
};

export default NotificationBellIcon;