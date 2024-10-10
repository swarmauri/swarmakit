import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Captcha.css';

const Captcha = ({ onSolve }) => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('default');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === '1234') {
      setStatus('solved');
      onSolve(true);
    } else {
      setStatus('error');
      onSolve(false);
    }
  };

  return (
    <div className={`captcha ${status}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="captcha-input"
        placeholder="Enter Captcha"
      />
      <button onClick={handleSubmit} className="captcha-button">
        Verify
      </button>
      {status === 'error' && <div className="captcha-error">Incorrect Captcha</div>}
    </div>
  );
};

Captcha.propTypes = {
  onSolve: PropTypes.func,
};

Captcha.defaultProps = {
  onSolve: () => {},
};

export default Captcha;