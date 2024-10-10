// AudioPlayer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './AudioPlayer.css';

const AudioPlayer = ({ src, controls, autoPlay, loop, muted }) => {
  return (
    <audio 
      src={src} 
      controls={controls} 
      autoPlay={autoPlay} 
      loop={loop} 
      muted={muted} 
      className="audio-player"
    />
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
};

AudioPlayer.defaultProps = {
  controls: true,
  autoPlay: false,
  loop: false,
  muted: false,
};

export default AudioPlayer;