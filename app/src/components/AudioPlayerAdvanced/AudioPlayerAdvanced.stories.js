import React from 'react';
import AudioPlayerAdvanced from './AudioPlayerAdvanced';

export default {
  title: 'Media/AudioPlayerAdvanced',
  component: AudioPlayerAdvanced,
};

const Template = (args) => <AudioPlayerAdvanced {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'audio.mp3',
  isPlaying: false,
  isMuted: false,
  volume: 0.5,
  playbackRate: 1.0,
};

export const Play = Template.bind({});
Play.args = {
  ...Default.args,
  isPlaying: true,
};

export const Pause = Template.bind({});
Pause.args = {
  ...Default.args,
  isPlaying: false,
};

export const Seek = Template.bind({});
Seek.args = {
  ...Default.args,
};

export const Mute = Template.bind({});
Mute.args = {
  ...Default.args,
  isMuted: true,
};

export const VolumeControl = Template.bind({});
VolumeControl.args = {
  ...Default.args,
  volume: 0.8,
};

export const SpeedControl = Template.bind({});
SpeedControl.args = {
  ...Default.args,
  playbackRate: 1.5,
};