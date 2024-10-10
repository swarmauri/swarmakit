import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  position: relative;
  width: 640px;
  height: 360px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
`;

const ControlButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = React.createRef();

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!document.fullscreenElement) {
      video.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <PlayerContainer>
      <VideoElement ref={videoRef} src={src} />
      <ControlButton onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </ControlButton>
      <ControlButton onClick={toggleFullscreen}>
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </ControlButton>
    </PlayerContainer>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;