import React from 'react';
import AudioWaveformDisplay from './AudioWaveformDisplay';

export default {
  title: 'Media/AudioWaveformDisplay',
  component: AudioWaveformDisplay,
};

const Template = (args) => <AudioWaveformDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'path/to/audio.mp3',
};

export const Playing = Template.bind({});
Playing.args = {
  src: 'path/to/audio.mp3',
};

export const Paused = Template.bind({});
Paused.args = {
  src: 'path/to/audio.mp3',
};

export const Loading = Template.bind({});
Loading.args = {
  src: 'path/to/audio.mp3',
};

export const Scrubbing = Template.bind({});
Scrubbing.args = {
  src: 'path/to/audio.mp3',
};