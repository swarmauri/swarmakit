import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
  &:focus {
    border-color: #888;
    outline: none;
  }
  &[disabled] {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  color: ${(props) => (props.match ? 'green' : 'red')};
  font-size: 0.9em;
`;

const PasswordConfirmationField = ({ password, onPasswordChange, confirmPassword, onConfirmPasswordChange, disabled }) => {
  const isMatch = password === confirmPassword;

  return (
    <Wrapper>
      <Input
        type="password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Password"
        disabled={disabled}
      />
      <Input
        type="password"
        value={confirmPassword}
        onChange={(e) => onConfirmPasswordChange(e.target.value)}
        placeholder="Confirm Password"
        disabled={disabled}
      />
      <Message match={isMatch}>
        {isMatch ? 'Passwords match' : 'Passwords do not match'}
      </Message>
    </Wrapper>
  );
};

PasswordConfirmationField.propTypes = {
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onConfirmPasswordChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

PasswordConfirmationField.defaultProps = {
  disabled: false,
};

export default PasswordConfirmationField;