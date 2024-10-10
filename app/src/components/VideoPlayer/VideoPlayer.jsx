// VideoPlayer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './VideoPlayer.css';

const VideoPlayer = ({ src, width, height, controls }) => {
  return (
    <div className="video-player">
      <video width={width} height={height} controls={controls}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  controls: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  width: '640px',
  height: '360px',
  controls: true,
};

export default VideoPlayer;