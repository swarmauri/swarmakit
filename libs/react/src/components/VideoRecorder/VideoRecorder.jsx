// VideoRecorder.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VideoRecorder.css';

const VideoRecorder = ({ width, height }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    setMediaStream(stream);
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    mediaStream.getTracks().forEach(track => track.stop());
    setIsRecording(false);
  };

  return (
    <div className="video-recorder">
      <div className="video-container" style={{ width, height }}>
        {isRecording && <video autoPlay srcObject={mediaStream}></video>}
      </div>
      <button onClick={isRecording ? handleStopRecording : handleStartRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};

VideoRecorder.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

VideoRecorder.defaultProps = {
  width: '640px',
  height: '480px',
};

export default VideoRecorder;