import React, { useState } from 'react';

interface CaptchaProps {
  onSolve: () => void;
  onError: () => void;
}

const Captcha: React.FC<CaptchaProps> = ({ onSolve, onError }) => {
  const [solved, setSolved] = useState(false);
  const [error, setError] = useState(false);

  const handleSolve = () => {
    setSolved(true);
    setError(false);
    onSolve();
  };

  const handleError = () => {
    setSolved(false);
    setError(true);
    onError();
  };

  return (
    <div className={`captcha ${solved ? 'solved' : ''} ${error ? 'error' : ''}`}>
      <button
        onClick={handleSolve}
        className="captcha-button"
        aria-label="Solve Captcha"
      >
        Solve
      </button>
      <button
        onClick={handleError}
        className="captcha-button"
        aria-label="Captcha Error"
      >
        Error
      </button>
    </div>
  );
};

export default Captcha;