import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &:active {
    background: #bbb;
  }
  &[disabled] {
    background: #f5f5f5;
  }
`;

const RangeSlider = ({ value, min, max, onChange, disabled }) => (
  <Wrapper>
    <Input
      type="range"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      disabled={disabled}
    />
  </Wrapper>
);

RangeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  disabled: false,
};

export default RangeSlider;