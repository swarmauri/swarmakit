import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, variant, disabled, onClick }) => {
  return (
    <button
      className={`button ${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
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