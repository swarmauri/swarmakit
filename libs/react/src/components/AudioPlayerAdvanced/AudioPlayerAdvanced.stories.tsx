import React from 'react';
import { Meta, Story } from '@storybook/react';
import AudioPlayerAdvanced, { AudioPlayerAdvancedProps } from './AudioPlayerAdvanced';

export default {
  title: 'component/Media/AudioPlayerAdvanced',
  component: AudioPlayerAdvanced,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AudioPlayerAdvancedProps> = (args) => <AudioPlayerAdvanced {...args} />;

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

export const Seek = Template.bind({});
Seek.args = {
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

export const SpeedControl = Template.bind({});
SpeedControl.args = {
  ...Default.args,
};