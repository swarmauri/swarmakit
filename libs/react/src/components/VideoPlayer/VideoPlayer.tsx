import React, { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`video-player ${isFullscreen ? 'fullscreen' : ''}`}>
      <h2>{title}</h2>
      <video src={videoUrl} controls autoPlay={isPlaying} onPlay={() => setIsBuffering(false)} onWaiting={() => setIsBuffering(true)} />
      <div className="controls">
        <button onClick={togglePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}>
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
      </div>
      {isBuffering && <div className="buffering">Buffering...</div>}
    </div>
  );
};

export default VideoPlayer;