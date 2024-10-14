import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LiveStreamPlayer.css';

const LiveStreamPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleBuffering = () => {
    setIsBuffering(!isBuffering);
  };

  return (
    <div className={`live-stream-player ${isBuffering ? 'buffering' : ''}`}>
      <video 
        src={src} 
        autoPlay 
        muted={isMuted} 
        controls 
        onPlay={() => setIsPlaying(true)} 
        onPause={() => setIsPlaying(false)} 
        onWaiting={handleBuffering}
        onPlaying={() => setIsBuffering(false)}
      />
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    </div>
  );
};

LiveStreamPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LiveStreamPlayer;