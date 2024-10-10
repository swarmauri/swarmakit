import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`;

const ControlButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
`;

const VolumeSlider = styled.input`
  width: 100px;
`;

const AudioPlayer = ({ src, isPlaying, isMuted, volume }) => {
  const audioRef = useRef(null);
  const [isPaused, setIsPaused] = useState(!isPlaying);

  const togglePlayPause = () => {
    if (isPaused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPaused(!isPaused);
  };

  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
  };

  const handleVolumeChange = (event) => {
    audioRef.current.volume = event.target.value;
  };

  return (
    <PlayerContainer>
      <audio ref={audioRef} src={src} autoPlay={isPlaying} muted={isMuted} volume={volume} />
      <ControlsContainer>
        <ControlButton onClick={togglePlayPause}>
          {isPaused ? 'Play' : 'Pause'}
        </ControlButton>
        <ControlButton onClick={toggleMute}>
          {audioRef.current && audioRef.current.muted ? 'Unmute' : 'Mute'}
        </ControlButton>
        <VolumeSlider
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue={volume}
          onChange={handleVolumeChange}
        />
      </ControlsContainer>
    </PlayerContainer>
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
  volume: PropTypes.number,
};

AudioPlayer.defaultProps = {
  isPlaying: false,
  isMuted: false,
  volume: 0.5,
};

export default AudioPlayer;