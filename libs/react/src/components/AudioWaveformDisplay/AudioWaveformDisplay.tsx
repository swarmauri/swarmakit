import React, { useEffect, useRef, useState } from 'react';

interface AudioWaveformDisplayProps {
  src: string;
}

const AudioWaveformDisplay: React.FC<AudioWaveformDisplayProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('canplay', () => setIsLoading(false));
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('canplay', () => setIsLoading(false));
      }
    };
  }, []);

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
    if (canvasRef.current && audioRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = getComputedStyle(canvas).getPropertyValue('--waveform-color');
        ctx.fillRect(0, 0, canvas.width * (audioRef.current.currentTime / audioRef.current.duration), canvas.height);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => drawWaveform(), 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="audio-waveform-display">
      <audio ref={audioRef} src={src} />
      <canvas ref={canvasRef} width="500" height="100" />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default AudioWaveformDisplay;