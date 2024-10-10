import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : '#fff')};
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Textarea = ({ placeholder, disabled, value, onChange }) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  placeholder: 'Enter text...',
  disabled: false,
  value: '',
};

export default Textarea;