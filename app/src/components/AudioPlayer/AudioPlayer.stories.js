// AudioPlayer.stories.js
import React from 'react';
import AudioPlayer from './AudioPlayer';

export default {
  title: 'Components/AudioPlayer',
  component: AudioPlayer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    src: { control: 'text' },
    controls: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    loop: { control: 'boolean' },
    muted: { control: 'boolean' },
  },
};

const Template = (args) => <AudioPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.example.com/audio.mp3',
  controls: true,
  autoPlay: false,
  loop: false,
  muted: false,
};

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  ...Default.args,
  autoPlay: true,
};

export const Loop = Template.bind({});
Loop.args = {
  ...Default.args,
  loop: true,
};

export const Muted = Template.bind({});
Muted.args = {
  ...Default.args,
  muted: true,
};