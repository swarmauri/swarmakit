// VideoAnnotator.stories.js
import React from 'react';
import VideoAnnotator from './VideoAnnotator';

export default {
  title: 'Components/VideoAnnotator',
  component: VideoAnnotator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    videoUrl: { control: 'text' },
    annotations: { control: 'object' },
  },
};

const Template = (args) => <VideoAnnotator {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoUrl: 'https://www.example.com/video.mp4',
  annotations: [
    { startTime: 5, endTime: 10, text: 'Annotation 1' },
    { startTime: 15, endTime: 20, text: 'Annotation 2' },
  ],
};

export const WithMultipleAnnotations = Template.bind({});
WithMultipleAnnotations.args = {
  videoUrl: 'https://www.example.com/video.mp4',
  annotations: [
    { startTime: 5, endTime: 10, text: 'Annotation 1' },
    { startTime: 12, endTime: 15, text: 'Annotation 2' },
    { startTime: 18, endTime: 22, text: 'Annotation 3' },
  ],
};