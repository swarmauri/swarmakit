// ReadReceipt.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ReadReceipt.css';

const ReadReceipt = ({ status }) => {
  return <div className={`read-receipt ${status}`} />;
};

ReadReceipt.propTypes = {
  status: PropTypes.oneOf(['seen', 'unseen', 'delivered', 'failed']).isRequired,
};

export default ReadReceipt;