import React from 'react';
import { Meta, Story } from '@storybook/react';
import LiveStreamPlayer, { LiveStreamPlayerProps } from './LiveStreamPlayer';

export default {
  title: 'component/Media/LiveStreamPlayer',
  component: LiveStreamPlayer,
  tags: ['autodocs'],
} as Meta;

const Template: Story<LiveStreamPlayerProps> = (args) => <LiveStreamPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.example.com/live-stream-url',
  autoPlay: false,
  muted: false,
};

export const Live = Template.bind({});
Live.args = {
  ...Default.args,
  autoPlay: true,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  autoPlay: false,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
  autoPlay: true,
  // Simulate buffering state
};

export const Muted = Template.bind({});
Muted.args = {
  ...Default.args,
  muted: true,
};