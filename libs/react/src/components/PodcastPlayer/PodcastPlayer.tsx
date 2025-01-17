import React, { useState } from 'react';

interface PodcastPlayerProps {
  episodes: string[];
  initialEpisodeIndex?: number;
}

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ episodes, initialEpisodeIndex = 0 }) => {
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(initialEpisodeIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const selectEpisode = (index: number) => {
    setCurrentEpisodeIndex(index);
    setIsPlaying(false);
  };

  return (
    <div className="podcast-player">
      <div className="episode-info">
        <h2>Episode {currentEpisodeIndex + 1}</h2>
        <p>{episodes[currentEpisodeIndex]}</p>
      </div>
      <div className="controls">
        <button onClick={togglePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleDownload} disabled={isDownloading} aria-label="Download Episode">
          {isDownloading ? 'Downloading...' : 'Download'}
        </button>
      </div>
      <div className="episode-list">
        {episodes.map((episode, index) => (
          <button key={index} onClick={() => selectEpisode(index)} aria-label={`Select Episode ${index + 1}`}>
            Episode {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PodcastPlayer;