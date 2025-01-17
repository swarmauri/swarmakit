import React, { useState, useEffect } from 'react';

interface EmbeddedMediaIframeProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
  allowFullscreen?: boolean;
}

const EmbeddedMediaIframe: React.FC<EmbeddedMediaIframeProps> = ({
  src,
  title,
  width = '560px',
  height = '315px',
  allowFullscreen = true,
}) => {
  const [isBuffering, setIsBuffering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBuffering(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`embedded-media-iframe ${isBuffering ? 'buffering' : ''}`}>
      {isBuffering ? (
        <div className="buffering-message">Buffering...</div>
      ) : (
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          allowFullScreen={allowFullscreen}
          className="iframe-content"
          aria-busy={isBuffering}
        ></iframe>
      )}
    </div>
  );
};

export default EmbeddedMediaIframe;