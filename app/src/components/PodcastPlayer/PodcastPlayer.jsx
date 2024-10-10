import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
`;

const EpisodeListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const Episode = styled.li`
  margin: 10px 0;
  cursor: pointer;
`;

const ControlButton = styled.button`
  margin: 5px;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #eee;
  margin: 10px 0;
  position: relative;
`;

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #007bff;
  transition: width 0.3s;
`;

const PodcastPlayer = ({ episodes }) => {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleEpisodeClick = (episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const downloadEpisode = (episode) => {
    console.log(`Downloading ${episode.title}`);
  };

  return (
    <PlayerContainer>
      <EpisodeListWrapper>
        {episodes.map((episode) => (
          <Episode key={episode.id} onClick={() => handleEpisodeClick(episode)}>
            {episode.title}
          </Episode>
        ))}
      </EpisodeListWrapper>
      {currentEpisode && (
        <>
          <h3>{currentEpisode.title}</h3>
          <ProgressBar>
            <Progress progress={progress} />
          </ProgressBar>
          <ControlButton onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </ControlButton>
          <ControlButton onClick={() => downloadEpisode(currentEpisode)}>
            Download
          </ControlButton>
        </>
      )}
    </PlayerContainer>
  );
};

PodcastPlayer.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PodcastPlayer;