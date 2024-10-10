// WebcamFeed.stories.js
import React from 'react';
import WebcamFeed from './WebcamFeed';

export default {
  title: 'Components/WebcamFeed',
  component: WebcamFeed,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <WebcamFeed {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 640,
  height: 480,
};

export const Small = Template.bind({});
Small.args = {
  width: 320,
  height: 240,
};

export const Large = Template.bind({});
Large.args = {
  width: 1280,
  height: 720,
};