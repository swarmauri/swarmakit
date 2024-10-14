// WebcamFeed.jsx
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './WebcamFeed.css';

const WebcamFeed = ({ width, height }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => {
          console.error('Error accessing webcam: ', error);
        });
    }
  }, []);

  return <video ref={videoRef} autoPlay width={width} height={height} className="webcam-feed" />;
};

WebcamFeed.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

WebcamFeed.defaultProps = {
  width: 640,
  height: 480,
};

export default WebcamFeed;