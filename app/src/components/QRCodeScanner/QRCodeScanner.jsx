// QRCodeScanner.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QRCodeScanner.css';

const QRCodeScanner = ({ onScan, onError }) => {
  const [scanning, setScanning] = useState(false);

  const handleStartScan = () => {
    setScanning(true);
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        onScan('https://example.com'); // Example QR code result
      } else {
        onError('Scan failed');
      }
      setScanning(false);
    }, 2000);
  };

  return (
    <div className="qr-code-scanner">
      <button onClick={handleStartScan} disabled={scanning} className="scan-button">
        {scanning ? 'Scanning...' : 'Start Scan'}
      </button>
    </div>
  );
};

QRCodeScanner.propTypes = {
  onScan: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default QRCodeScanner;