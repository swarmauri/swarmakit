import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  background-color: ${({ status }) => {
    switch (status) {
      case 'uploading':
        return '#e8f7ff';
      case 'downloading':
        return '#e0f7fa';
      case 'completed':
        return '#e8f5e9';
      case 'paused':
        return '#fff3e0';
      case 'failed':
        return '#ffebee';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case 'uploading':
        return '#0277bd';
      case 'downloading':
        return '#00838f';
      case 'completed':
        return '#388e3c';
      case 'paused':
        return '#f57c00';
      case 'failed':
        return '#d32f2f';
      default:
        return '#424242';
    }
  }};
`;

const StatusMessage = styled.span`
  margin-left: 1rem;
`;

const Upload = ({ filename, status }) => {
  return (
    <UploadContainer status={status}>
      <span>{filename}</span>
      <StatusMessage>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </StatusMessage>
    </UploadContainer>
  );
};

Upload.propTypes = {
  filename: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['uploading', 'downloading', 'completed', 'paused', 'failed']).isRequired,
};

export default Upload;