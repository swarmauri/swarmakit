import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AudioWaveformDisplay.css';

const AudioWaveformDisplay = ({ src }) => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
        setIsLoading(false);
      });

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
        drawWaveform();
      });
    }
  }, [src]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const drawWaveform = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    context.clearRect(0, 0, width, height);
    context.fillStyle = '#007bff';
    const progress = (currentTime / duration) * width;
    context.fillRect(0, 0, progress, height);
  };

  const handleScrub = (event) => {
    const newTime = (event.nativeEvent.offsetX / canvasRef.current.clientWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="audio-waveform-display-container">
      <audio ref={audioRef} src={src} />
      <canvas
        ref={canvasRef}
        width="600"
        height="100"
        onClick={handleScrub}
        className="waveform-canvas"
      />
      <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

AudioWaveformDisplay.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AudioWaveformDisplay;