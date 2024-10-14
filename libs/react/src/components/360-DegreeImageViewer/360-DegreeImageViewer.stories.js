import React from 'react';
import DegreeImageViewer from './360-DegreeImageViewer';

export default {
  title: 'Media/360-DegreeImageViewer',
  component: DegreeImageViewer,
};

const images = Array.from({ length: 36 }, (_, index) => `path/to/image${index + 1}.jpg`);

const Template = (args) => <DegreeImageViewer {...args} images={images} />;

export const Default = Template.bind({});
Default.args = {
  autoRotate: true,
  zoom: true,
};

export const Rotating = Template.bind({});
Rotating.args = {
  autoRotate: true,
  zoom: false,
};

export const Paused = Template.bind({});
Paused.args = {
  autoRotate: false,
  zoom: false,
};

export const ZoomInOut = Template.bind({});
ZoomInOut.args = {
  autoRotate: false,
  zoom: true,
};

export const Loading = Template.bind({});
Loading.args = {
  autoRotate: false,
  zoom: false,
};