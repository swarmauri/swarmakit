import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({ children, variant, disabled, onClick }) => {
  return (
    <StyledButton className={`btn-${variant}`} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  onClick: () => {},
};

export default Button;