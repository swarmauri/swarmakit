import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BadgeContainer = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 12px;
  font-size: 0.75em;
  color: white;
  background-color: ${(props) => {
    switch (props.variant) {
      case 'notification':
        return '#3498db';
      case 'status':
        return '#4caf50';
      default:
        return '#7f8c8d';
    }
  }};
`;

const Badge = ({ variant, children }) => {
  return <BadgeContainer variant={variant}>{children}</BadgeContainer>;
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['default', 'notification', 'status']).isRequired,
  children: PropTypes.node,
};

Badge.defaultProps = {
  variant: 'default',
  children: null,
};

export default Badge;