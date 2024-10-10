import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 640px;
  height: 360px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
`;

const StatusMessage = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 3px;
`;

const Video = ({ src, status }) => {
  const [videoStatus, setVideoStatus] = useState(status);

  return (
    <VideoContainer>
      {videoStatus !== 'Completed' && (
        <StatusMessage>{videoStatus}</StatusMessage>
      )}
      <VideoElement src={src} controls />
    </VideoContainer>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Uploading', 'Paused', 'Completed', 'Error']),
};

export default Video;