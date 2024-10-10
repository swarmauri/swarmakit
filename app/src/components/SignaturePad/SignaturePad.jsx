// SignaturePad.jsx
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './SignaturePad.css';

const SignaturePad = ({ canvasWidth, canvasHeight, penColor }) => {
  const canvasRef = useRef(null);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="signature-pad">
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: '1px solid #000', cursor: 'crosshair' }}
      />
      <button onClick={clearCanvas} className="clear-button">
        Clear
      </button>
    </div>
  );
};

SignaturePad.propTypes = {
  canvasWidth: PropTypes.number,
  canvasHeight: PropTypes.number,
  penColor: PropTypes.string,
};

SignaturePad.defaultProps = {
  canvasWidth: 500,
  canvasHeight: 200,
  penColor: '#000',
};

export default SignaturePad;