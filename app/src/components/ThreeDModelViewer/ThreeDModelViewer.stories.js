// ThreeDModelViewer.stories.js
import React from 'react';
import ThreeDModelViewer from './ThreeDModelViewer';

export default {
  title: 'Components/ThreeDModelViewer',
  component: ThreeDModelViewer,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ThreeDModelViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
  modelUrl: 'https://example.com/model.glb',
  altText: '3D Model',
};

export const RotatingModel = Template.bind({});
RotatingModel.args = {
  modelUrl: 'https://example.com/rotating-model.glb',
  altText: 'Rotating 3D Model',
};