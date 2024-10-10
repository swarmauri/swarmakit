import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Video.css';

const Video = ({ videoSrc }) => {
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, paused, completed, error

  const handleUpload = () => {
    setUploadStatus('uploading');
    // Simulate an upload process
    setTimeout(() => {
      setUploadStatus('completed');
    }, 3000);
  };

  const handlePause = () => {
    setUploadStatus('paused');
  };

  const handleError = () => {
    setUploadStatus('error');
  };

  return (
    <div className="video-container">
      <video src={videoSrc} controls />
      <div className="status-controls">
        {uploadStatus === 'uploading' && <span>Uploading...</span>}
        {uploadStatus === 'paused' && <span>Paused</span>}
        {uploadStatus === 'completed' && <span>Completed</span>}
        {uploadStatus === 'error' && <span>Error in uploading</span>}
      </div>
      <div className="upload-controls">
        <button onClick={handleUpload}>Upload</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleError}>Simulate Error</button>
      </div>
    </div>
  );
};

Video.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default Video;