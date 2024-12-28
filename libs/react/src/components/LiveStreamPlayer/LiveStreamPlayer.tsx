import React, { useState, useRef } from 'react';

interface LiveStreamPlayerProps {
  src: string;
  width?: string;
  height?: string;
  autoPlay?: boolean;
  muted?: boolean;
}

const LiveStreamPlayer: React.FC<LiveStreamPlayerProps> = ({
  src,
  width = '800px',
  height = '450px',
  autoPlay = false,
  muted = false,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isBuffering, setIsBuffering] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleBuffering = () => {
    setIsBuffering(true);
  };

  const handlePlaying = () => {
    setIsBuffering(false);
  };

  return (
    <div className="live-stream-player" style={{ width, height }}>
      {isBuffering && <div className="buffering">Buffering...</div>}
      <video
        ref={videoRef}
        src={src}
        width="100%"
        height="100%"
        autoPlay={autoPlay}
        muted={muted}
        onPlay={handlePlaying}
        onWaiting={handleBuffering}
        controls
      />
      <button onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
};

export default LiveStreamPlayer;