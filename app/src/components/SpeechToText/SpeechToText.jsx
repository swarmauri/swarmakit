// SpeechToText.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SpeechToText.css';

const SpeechToText = ({ onTranscript, onError }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleRecordToggle = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  const startRecording = () => {
    // Simulated transcription process
    setTranscript('Simulated transcript...');
    onTranscript('Simulated transcript...');
  };

  const stopRecording = () => {
    // Reset transcription
    setTranscript('');
  };

  return (
    <div className="speech-to-text">
      <button onClick={handleRecordToggle} className="record-button">
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <p className="transcript">{transcript}</p>
    </div>
  );
};

SpeechToText.propTypes = {
  onTranscript: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default SpeechToText;