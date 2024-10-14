// VideoRecorder.stories.js
import React from 'react';
import VideoRecorder from './VideoRecorder';

export default {
  title: 'Components/VideoRecorder',
  component: VideoRecorder,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

const Template = (args) => <VideoRecorder {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '640px',
  height: '480px',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  width: '320px',
  height: '240px',
};