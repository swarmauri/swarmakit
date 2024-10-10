import React from 'react';
import AudioPlayerAdvanced from './AudioPlayerAdvanced';

export default {
  title: 'Media/AudioPlayerAdvanced',
  component: AudioPlayerAdvanced,
};

const Template = (args) => <AudioPlayerAdvanced {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'path/to/audio.mp3',
  autoPlay: false,
};

export const Play = Template.bind({});
Play.args = {
  src: 'path/to/audio.mp3',
  autoPlay: true,
};

export const Pause = Template.bind({});
Pause.args = {
  src: 'path/to/audio.mp3',
  autoPlay: false,
};

export const Seek = Template.bind({});
Seek.args = {
  src: 'path/to/audio.mp3',
  autoPlay: false,
};

export const Mute = Template.bind({});
Mute.args = {
  src: 'path/to/audio.mp3',
  autoPlay: true,
};

export const VolumeControl = Template.bind({});
VolumeControl.args = {
  src: 'path/to/audio.mp3',
  autoPlay: false,
};

export const SpeedControl = Template.bind({});
SpeedControl.args = {
  src: 'path/to/audio.mp3',
  autoPlay: false,
};