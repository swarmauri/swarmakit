// VideoAnnotator.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VideoAnnotator.css';

const VideoAnnotator = ({ videoUrl, annotations }) => {
  const [currentAnnotation, setCurrentAnnotation] = useState(null);

  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    const annotation = annotations.find(
      (ann) => ann.startTime <= currentTime && ann.endTime >= currentTime
    );
    setCurrentAnnotation(annotation);
  };

  return (
    <div className="video-annotator">
      <video src={videoUrl} controls onTimeUpdate={handleTimeUpdate}></video>
      {currentAnnotation && (
        <div className="annotation">
          <p>{currentAnnotation.text}</p>
        </div>
      )}
    </div>
  );
};

VideoAnnotator.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  annotations: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VideoAnnotator;