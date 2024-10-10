// VideoPlayer.stories.js
import React from 'react';
import VideoPlayer from './VideoPlayer';

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    controls: { control: 'boolean' },
  },
};

const Template = (args) => <VideoPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  width: '640px',
  height: '360px',
  controls: true,
};

export const NoControls = Template.bind({});
NoControls.args = {
  ...Default.args,
  controls: false,
};