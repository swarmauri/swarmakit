import React from 'react';
import Video from './Video';

export default {
  title: 'Media/Video',
  component: Video,
};

const Template = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
};

export const Uploading = Template.bind({});
Uploading.args = {
  ...Default.args,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
};

export const Completed = Template.bind({});
Completed.args = {
  ...Default.args,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
};