// AudioRecorder.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AudioRecorder.css';

const AudioRecorder = ({ onRecordStart, onRecordStop }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordToggle = () => {
    if (isRecording) {
      onRecordStop();
    } else {
      onRecordStart();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="audio-recorder">
      <button onClick={handleRecordToggle} className="record-button">
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};

AudioRecorder.propTypes = {
  onRecordStart: PropTypes.func.isRequired,
  onRecordStop: PropTypes.func.isRequired,
};

export default AudioRecorder;