import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  padding: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 50%;

  &:disabled {
    cursor: not-allowed;
  }
`;

const IconButton = ({ icon, disabled, onClick }) => {
  return (
    <StyledIconButton disabled={disabled} onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default IconButton;