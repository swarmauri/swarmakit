import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DegreeImageViewer, { ImageViewerProps } from './360-DegreeImageViewer';

export default {
  title: 'component/Media/360-DegreeImageViewer',
  component: DegreeImageViewer,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ImageViewerProps> = (args) => <DegreeImageViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: Array.from({ length: 36 }, (_, i) => `/images/frame${i + 1}.jpg`),
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