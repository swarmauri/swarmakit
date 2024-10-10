// LiveVideoStreaming.jsx
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './LiveVideoStreaming.css';

const LiveVideoStreaming = ({ streamUrl, width, height }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = streamUrl;
    }
  }, [streamUrl]);

  return (
    <div className="live-video-streaming" style={{ width, height }}>
      <video ref={videoRef} autoPlay controls></video>
    </div>
  );
};

LiveVideoStreaming.propTypes = {
  streamUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

LiveVideoStreaming.defaultProps = {
  width: '640px',
  height: '360px',
};

export default LiveVideoStreaming;