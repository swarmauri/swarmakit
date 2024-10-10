import React from 'react';
import AudioPlayer from './AudioPlayer';

export default {
  title: 'Media/AudioPlayer',
  component: AudioPlayer,
};

const Template = (args) => <AudioPlayer {...args} />;

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