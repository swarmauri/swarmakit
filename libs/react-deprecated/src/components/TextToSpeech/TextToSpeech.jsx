// TextToSpeech.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TextToSpeech.css';

const TextToSpeech = ({ text, onSpeakStart, onSpeakEnd }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeakToggle = () => {
    if (isSpeaking) {
      onSpeakEnd();
    } else {
      onSpeakStart();
    }
    setIsSpeaking(!isSpeaking);
  };

  return (
    <div className="text-to-speech">
      <p className="text">{text}</p>
      <button onClick={handleSpeakToggle} className="speak-button">
        {isSpeaking ? 'Stop Speaking' : 'Start Speaking'}
      </button>
    </div>
  );
};

TextToSpeech.propTypes = {
  text: PropTypes.string.isRequired,
  onSpeakStart: PropTypes.func.isRequired,
  onSpeakEnd: PropTypes.func.isRequired,
};

export default TextToSpeech;