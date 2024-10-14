// ImageViewer.stories.js
import React from 'react';
import ImageViewer from './ImageViewer';

export default {
  title: 'Components/ImageViewer',
  component: ImageViewer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imageUrl: { control: 'text' },
    altText: { control: 'text' },
  },
};

const Template = (args) => <ImageViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://example.com/sample-image.jpg',
  altText: 'Sample Image',
};

export const PortraitImage = Template.bind({});
PortraitImage.args = {
  imageUrl: 'https://example.com/portrait-image.jpg',
  altText: 'Portrait Image',
};

export const LandscapeImage = Template.bind({});
LandscapeImage.args = {
  imageUrl: 'https://example.com/landscape-image.jpg',
  altText: 'Landscape Image',
};