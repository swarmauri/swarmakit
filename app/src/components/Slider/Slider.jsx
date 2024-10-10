import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderInput = styled.input`
  width: 100%;
  margin: 0.5rem 0;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Slider = ({ min, max, value, disabled, onChange }) => {
  return (
    <SliderInput
      type="range"
      min={min}
      max={max}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  disabled: false,
};

export default Slider;