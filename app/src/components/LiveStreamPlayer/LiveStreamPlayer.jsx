import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  background-color: #000;
`;

const Video = styled.video`
  width: 100%;
  height: 450px;
  background-color: #000;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
`;

const LiveStreamPlayer = ({ streamUrl, isMuted }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  
  const videoRef = React.useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <PlayerContainer>
      <Video
        ref={videoRef}
        src={streamUrl}
        muted={isMuted}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
      />
      <Controls>
        <Button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        {isBuffering && <span>Buffering...</span>}
      </Controls>
    </PlayerContainer>
  );
};

LiveStreamPlayer.propTypes = {
  streamUrl: PropTypes.string.isRequired,
  isMuted: PropTypes.bool,
};

LiveStreamPlayer.defaultProps = {
  isMuted: false,
};

export default LiveStreamPlayer;