import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WaveformContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 100px;
  background-color: #f0f0f0;
  position: relative;
`;

const WaveformCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const AudioWaveformDisplay = ({ src, isPlaying, isLoading, isScrubbing }) => {
  const canvasRef = useRef(null);
  const audioRef = useRef(new Audio(src));
  const [waveform, setWaveform] = useState(null);

  useEffect(() => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawWaveform = () => {
      if (!context || !waveform) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      waveform.forEach((value, index) => {
        const x = (index / waveform.length) * canvas.width;
        const y = (1 - value) * canvas.height;
        context.lineTo(x, y);
      });
      context.stroke();
    };

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    drawWaveform();

    return () => {
      audio.pause();
    };
  }, [isPlaying, waveform]);

  const loadWaveform = () => {
    // Simulate waveform data
    const mockWaveform = new Array(100).fill(0).map(() => Math.random());
    setWaveform(mockWaveform);
  };

  useEffect(() => {
    loadWaveform();
  }, [src]);

  return (
    <WaveformContainer>
      <WaveformCanvas ref={canvasRef} />
    </WaveformContainer>
  );
};

AudioWaveformDisplay.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  isLoading: PropTypes.bool,
  isScrubbing: PropTypes.bool,
};

AudioWaveformDisplay.defaultProps = {
  isPlaying: false,
  isLoading: false,
  isScrubbing: false,
};

export default AudioWaveformDisplay;