// LiveVideoStreaming.stories.js
import React from 'react';
import LiveVideoStreaming from './LiveVideoStreaming';

export default {
  title: 'Components/LiveVideoStreaming',
  component: LiveVideoStreaming,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    streamUrl: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

const Template = (args) => <LiveVideoStreaming {...args} />;

export const Default = Template.bind({});
Default.args = {
  streamUrl: 'https://www.example.com/stream',
  width: '640px',
  height: '360px',
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  streamUrl: 'https://www.example.com/stream',
  width: '100%',
  height: '100vh',
};