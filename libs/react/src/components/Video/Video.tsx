import React, { useState } from 'react';

interface VideoProps {
  videoUrl: string;
  title: string;
}

const Video: React.FC<VideoProps> = ({ videoUrl, title }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsCompleted(true);
    }, 3000);
  };

  const simulateError = () => {
    setHasError(true);
  };

  return (
    <div className="video-container">
      <h2>{title}</h2>
      {isUploading && <div className="status">Uploading...</div>}
      {hasError && <div className="status error">Error occurred!</div>}
      {isCompleted && !hasError && (
        <video src={videoUrl} controls={!isPaused} autoPlay={!isPaused}>
          Your browser does not support the video tag.
        </video>
      )}
      <div className="controls">
        <button onClick={togglePause} disabled={isUploading || hasError} aria-label={isPaused ? 'Play' : 'Pause'}>
          {isPaused ? 'Play' : 'Pause'}
        </button>
        <button onClick={simulateUpload} disabled={isCompleted || isUploading || hasError} aria-label="Upload">
          Upload
        </button>
        <button onClick={simulateError} disabled={isCompleted || hasError} aria-label="Simulate Error">
          Simulate Error
        </button>
      </div>
    </div>
  );
};

export default Video;