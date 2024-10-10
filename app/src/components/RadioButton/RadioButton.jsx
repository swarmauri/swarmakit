import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 10px;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  font-size: 1em;
  color: #333;
`;

const RadioButton = ({ label, selected, onChange, disabled }) => (
  <Wrapper>
    <Input
      type="radio"
      checked={selected}
      onChange={onChange}
      disabled={disabled}
    />
    <Label>{label}</Label>
  </Wrapper>
);

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  selected: false,
  disabled: false,
};

export default RadioButton;