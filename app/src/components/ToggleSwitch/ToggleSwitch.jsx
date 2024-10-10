import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? '#4caf50' : '#ccc')};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) => (props.checked ? 'translateX(26px)' : 'translateX(0)')};
  }
`;

const ToggleSwitch = ({ checked, disabled, onChange }) => {
  return (
    <Switch>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <Slider checked={checked} />
    </Switch>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ToggleSwitch.defaultProps = {
  checked: false,
  disabled: false,
};

export default ToggleSwitch;