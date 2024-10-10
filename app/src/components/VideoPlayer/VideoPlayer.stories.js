import React from 'react';
import VideoPlayer from './VideoPlayer';

export default {
  title: 'Media/VideoPlayer',
  component: VideoPlayer,
};

const Template = (args) => <VideoPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'sample-video.mp4',
};

export const Play = Template.bind({});
Play.args = {
  ...Default.args,
};

export const Pause = Template.bind({});
Pause.args = {
  ...Default.args,
};

export const Buffering = Template.bind({});
Buffering.args = {
  ...Default.args,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  ...Default.args,
};