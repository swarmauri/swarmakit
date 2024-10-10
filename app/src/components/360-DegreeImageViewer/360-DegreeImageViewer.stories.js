import React from 'react';
import DegreeImageViewer from './360-DegreeImageViewer';

export default {
  title: 'Media/360-DegreeImageViewer',
  component: DegreeImageViewer,
};

const Template = (args) => <DegreeImageViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  isRotating: false,
  isZoomed: false,
  isLoading: false,
};

export const Rotating = Template.bind({});
Rotating.args = {
  ...Default.args,
  isRotating: true,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  isRotating: false,
};

export const ZoomInOut = Template.bind({});
ZoomInOut.args = {
  ...Default.args,
  isZoomed: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};