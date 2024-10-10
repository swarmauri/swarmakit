import React from 'react';
import LiveStreamPlayer from './LiveStreamPlayer';

export default {
  title: 'Media/LiveStreamPlayer',
  component: LiveStreamPlayer,
};

const Template = (args) => <LiveStreamPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  streamUrl: 'https://www.example.com/livestream',
  isMuted: false,
};

export const Live = Template.bind({});
Live.args = {
  ...Default.args,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
};

export const Muted = Template.bind({});
Muted.args = {
  ...Default.args,
  isMuted: true,
};