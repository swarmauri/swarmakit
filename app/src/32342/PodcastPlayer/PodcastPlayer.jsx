import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PodcastPlayer.css';

const PodcastPlayer = ({ episodes }) => {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleEpisodeSelect = (index) => {
    setCurrentEpisode(index);
    setIsPlaying(true);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000); // Simulate download
  };

  return (
    <div className="podcast-player">
      <div className="episode-info">
        <h3>{episodes[currentEpisode].title}</h3>
        <p>{episodes[currentEpisode].description}</p>
      </div>
      <div className="player-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleDownload}>
          {isDownloading ? 'Downloading...' : 'Download'}
        </button>
      </div>
      <ul className="episode-list">
        {episodes.map((episode, index) => (
          <li key={index} onClick={() => handleEpisodeSelect(index)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

PodcastPlayer.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PodcastPlayer;