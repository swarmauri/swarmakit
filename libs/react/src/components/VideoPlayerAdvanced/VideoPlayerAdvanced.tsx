import React, { useState } from 'react';

interface VideoPlayerAdvancedProps {
  videoUrl: string;
  title: string;
  subtitlesUrl?: string;
}

const VideoPlayerAdvanced: React.FC<VideoPlayerAdvancedProps> = ({ videoUrl, title, subtitlesUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [areSubtitlesVisible, setAreSubtitlesVisible] = useState(false);
  const [isPiPMode, setIsPiPMode] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleSubtitles = () => {
    setAreSubtitlesVisible(!areSubtitlesVisible);
  };

  const togglePiPMode = () => {
    setIsPiPMode(!isPiPMode);
  };

  return (
    <div className={`video-player-advanced ${isFullscreen ? 'fullscreen' : ''}`}>
      <h2>{title}</h2>
      <video src={videoUrl} controls autoPlay={isPlaying} onPlay={() => setIsBuffering(false)} onWaiting={() => setIsBuffering(true)}>
        {subtitlesUrl && <track kind="subtitles" src={subtitlesUrl} srcLang="en" label="English" default={areSubtitlesVisible} />}
      </video>
      <div className="controls">
        <button onClick={togglePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}>
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
        <button onClick={toggleSubtitles} aria-label={areSubtitlesVisible ? 'Hide Subtitles' : 'Show Subtitles'}>
          {areSubtitlesVisible ? 'Subtitles Off' : 'Subtitles On'}
        </button>
        <button onClick={togglePiPMode} aria-label={isPiPMode ? 'Exit PiP Mode' : 'Enter PiP Mode'}>
          {isPiPMode ? 'Exit PiP' : 'Enter PiP'}
        </button>
      </div>
      {isBuffering && <div className="buffering">Buffering...</div>}
    </div>
  );
};

export default VideoPlayerAdvanced;