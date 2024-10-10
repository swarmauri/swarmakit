// AudioRecorder.stories.js
import React from 'react';
import AudioRecorder from './AudioRecorder';

export default {
  title: 'Components/AudioRecorder',
  component: AudioRecorder,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onRecordStart: { action: 'record started' },
    onRecordStop: { action: 'record stopped' },
  },
};

const Template = (args) => <AudioRecorder {...args} />;

export const Default = Template.bind({});
Default.args = {};