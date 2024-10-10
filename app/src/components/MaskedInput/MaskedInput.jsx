import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #888;
    outline: none;
  }
  &[disabled] {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;

const MaskedInput = ({ mask, value, onChange, disabled }) => {
  const handleInputChange = (e) => {
    const maskedValue = mask ? mask(e.target.value) : e.target.value;
    onChange(maskedValue);
  };

  return <Input type="text" value={value} onChange={handleInputChange} disabled={disabled} />;
};

MaskedInput.propTypes = {
  mask: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

MaskedInput.defaultProps = {
  mask: null,
  value: '',
  disabled: false,
};

export default MaskedInput;