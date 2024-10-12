import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VideoPlayerAdvanced.css';

const VideoPlayerAdvanced = ({ videoSrc, subtitlesSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSubtitlesOn, setIsSubtitlesOn] = useState(false);
  const [isPiPMode, setIsPiPMode] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleSubtitlesToggle = () => {
    setIsSubtitlesOn(!isSubtitlesOn);
  };

  const handlePiPToggle = () => {
    setIsPiPMode(!isPiPMode);
  };

  return (
    <div className={`video-player-advanced ${isFullscreen ? 'fullscreen' : ''}`}>
      <video
        src={videoSrc}
        controls
        onPlay={() => setIsBuffering(false)}
        onPause={() => setIsPlaying(false)}
        className={isBuffering ? 'buffering' : ''}
      >
        {isSubtitlesOn && <track default kind="subtitles" src={subtitlesSrc} />}
      </video>
      <div className="video-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleFullscreenToggle}>
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
        <button onClick={handleSubtitlesToggle}>
          {isSubtitlesOn ? 'Subtitles Off' : 'Subtitles On'}
        </button>
        <button onClick={handlePiPToggle}>
          {isPiPMode ? 'Exit PiP' : 'PiP Mode'}
        </button>
      </div>
    </div>
  );
};

VideoPlayerAdvanced.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  subtitlesSrc: PropTypes.string,
};

export default VideoPlayerAdvanced;