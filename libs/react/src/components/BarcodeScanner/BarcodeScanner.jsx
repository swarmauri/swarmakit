// BarcodeScanner.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BarcodeScanner.css';

const BarcodeScanner = ({ onScan, onError }) => {
  const [scanning, setScanning] = useState(false);

  const handleStartScan = () => {
    setScanning(true);
    // Simulate a scan event
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        onScan('1234567890'); // Example barcode
      } else {
        onError('Scan failed');
      }
      setScanning(false);
    }, 2000);
  };

  return (
    <div className="barcode-scanner">
      <button onClick={handleStartScan} disabled={scanning} className="scan-button">
        {scanning ? 'Scanning...' : 'Start Scan'}
      </button>
    </div>
  );
};

BarcodeScanner.propTypes = {
  onScan: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default BarcodeScanner;