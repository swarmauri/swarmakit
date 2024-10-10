import React from 'react';
import PropTypes from 'prop-types';
import './Upload.css';

const Upload = ({ status, message }) => {
  return (
    <div className={`upload ${status}`}>
      <p>{message}</p>
    </div>
  );
};

Upload.propTypes = {
  status: PropTypes.oneOf(['uploading', 'downloading', 'completed', 'paused', 'failed']).isRequired,
  message: PropTypes.string.isRequired,
};

Upload.defaultProps = {
  status: 'uploading',
  message: 'Uploading...',
};

export default Upload;