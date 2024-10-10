import React from 'react';
import AudioWaveformDisplay from './AudioWaveformDisplay';

export default {
  title: 'Media/AudioWaveformDisplay',
  component: AudioWaveformDisplay,
};

const Template = (args) => <AudioWaveformDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'audio.mp3',
  isPlaying: false,
  isLoading: false,
  isScrubbing: false,
};

export const Playing = Template.bind({});
Playing.args = {
  ...Default.args,
  isPlaying: true,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  isPlaying: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Scrubbing = Template.bind({});
Scrubbing.args = {
  ...Default.args,
  isScrubbing: true,
};