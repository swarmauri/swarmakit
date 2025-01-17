import React from 'react';
import { Meta, Story } from '@storybook/react';
import AudioPlayer, { AudioPlayerProps } from './AudioPlayer';

export default {
  title: 'component/Media/AudioPlayer',
  component: AudioPlayer,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AudioPlayerProps> = (args) => <AudioPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/audio/sample.mp3',
};

export const Play = Template.bind({});
Play.args = {
  ...Default.args,
};

export const Pause = Template.bind({});
Pause.args = {
  ...Default.args,
};

export const Mute = Template.bind({});
Mute.args = {
  ...Default.args,
};

export const VolumeControl = Template.bind({});
VolumeControl.args = {
  ...Default.args,
};