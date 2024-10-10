import React from 'react';
import AudioPlayer from './AudioPlayer';

export default {
  title: 'Media/AudioPlayer',
  component: AudioPlayer,
};

const Template = (args) => <AudioPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'audio.mp3',
  isPlaying: false,
  isMuted: false,
  volume: 0.5,
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