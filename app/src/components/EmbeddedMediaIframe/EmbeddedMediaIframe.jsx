import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
`;

const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const EmbeddedMediaIframe = ({ src, allowFullscreen }) => (
  <IframeContainer>
    <ResponsiveIframe
      src={src}
      allowFullScreen={allowFullscreen}
      loading="lazy"
    />
  </IframeContainer>
);

EmbeddedMediaIframe.propTypes = {
  src: PropTypes.string.isRequired,
  allowFullscreen: PropTypes.bool,
};

EmbeddedMediaIframe.defaultProps = {
  allowFullscreen: false,
};

export default EmbeddedMediaIframe;