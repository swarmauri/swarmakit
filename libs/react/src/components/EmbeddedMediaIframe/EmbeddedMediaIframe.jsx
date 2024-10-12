import React from 'react';
import PropTypes from 'prop-types';
import './EmbeddedMediaIframe.css';

const EmbeddedMediaIframe = ({ src, title, allowFullScreen, isBuffering }) => {
  return (
    <div className={`iframe-container ${isBuffering ? 'buffering' : ''}`}>
      <iframe
        src={src}
        title={title}
        allowFullScreen={allowFullScreen}
        className="embedded-media-iframe"
        frameBorder="0"
      />
      {isBuffering && <div className="buffering-overlay">Buffering...</div>}
    </div>
  );
};

EmbeddedMediaIframe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  allowFullScreen: PropTypes.bool,
  isBuffering: PropTypes.bool,
};

EmbeddedMediaIframe.defaultProps = {
  allowFullScreen: true,
  isBuffering: false,
};

export default EmbeddedMediaIframe;