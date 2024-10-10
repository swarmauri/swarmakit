import React from 'react';
import Video from './Video';

export default {
  title: 'Media/Video',
  component: Video,
};

const Template = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'sample-video.mp4',
  status: 'Completed',
};

export const Uploading = Template.bind({});
Uploading.args = {
  src: 'sample-video.mp4',
  status: 'Uploading',
};

export const Paused = Template.bind({});
Paused.args = {
  src: 'sample-video.mp4',
  status: 'Paused',
};

export const Completed = Template.bind({});
Completed.args = {
  src: 'sample-video.mp4',
  status: 'Completed',
};

export const Error = Template.bind({});
Error.args = {
  src: 'sample-video.mp4',
  status: 'Error',
};