// ThreeDModelViewer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ThreeDModelViewer.css';

const ThreeDModelViewer = ({ modelUrl, altText }) => {
  return (
    <div className="three-d-model-viewer">
      <model-viewer src={modelUrl} alt={altText} auto-rotate camera-controls></model-viewer>
    </div>
  );
};

ThreeDModelViewer.propTypes = {
  modelUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default ThreeDModelViewer;