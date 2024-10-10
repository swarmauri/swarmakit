import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60px;
  text-align: center;
  box-sizing: border-box;
  margin: 0 5px;
  &:focus {
    border-color: #888;
    outline: none;
  }
  &[disabled] {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const NumberInputWithIncrement = ({ value, onChange, disabled }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  return (
    <Wrapper>
      <Button onClick={handleDecrement} disabled={disabled}>-</Button>
      <Input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} disabled={disabled} />
      <Button onClick={handleIncrement} disabled={disabled}>+</Button>
    </Wrapper>
  );
};

NumberInputWithIncrement.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

NumberInputWithIncrement.defaultProps = {
  disabled: false,
};

export default NumberInputWithIncrement;