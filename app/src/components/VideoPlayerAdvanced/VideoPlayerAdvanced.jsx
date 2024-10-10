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
  margin-right: 10px;
`;

const VideoPlayerAdvanced = ({ src, subtitles }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(false);
  const [pipMode, setPipMode] = useState(false);

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

  const toggleSubtitles = () => {
    const video = videoRef.current;
    const track = video.textTracks[0];
    if (track.mode === 'showing') {
      track.mode = 'hidden';
      setSubtitlesOn(false);
    } else {
      track.mode = 'showing';
      setSubtitlesOn(true);
    }
  };

  const togglePiPMode = async () => {
    const video = videoRef.current;
    if (!pipMode) {
      try {
        await video.requestPictureInPicture();
        setPipMode(true);
      } catch (error) {
        console.error('Error entering PiP mode:', error);
      }
    } else {
      document.exitPictureInPicture();
      setPipMode(false);
    }
  };

  return (
    <PlayerContainer>
      <VideoElement ref={videoRef} src={src}>
        {subtitles && <track label="English" kind="subtitles" srcLang="en" src={subtitles} />}
      </VideoElement>
      <ControlButton onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </ControlButton>
      <ControlButton onClick={toggleFullscreen}>
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </ControlButton>
      <ControlButton onClick={toggleSubtitles}>
        {subtitlesOn ? 'Subtitles Off' : 'Subtitles On'}
      </ControlButton>
      <ControlButton onClick={togglePiPMode}>
        {pipMode ? 'Exit PiP' : 'PiP Mode'}
      </ControlButton>
    </PlayerContainer>
  );
};

VideoPlayerAdvanced.propTypes = {
  src: PropTypes.string.isRequired,
  subtitles: PropTypes.string,
};

export default VideoPlayerAdvanced;