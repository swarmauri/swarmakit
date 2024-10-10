// ImageAnnotator.stories.js
import React from 'react';
import ImageAnnotator from './ImageAnnotator';

export default {
  title: 'Components/ImageAnnotator',
  component: ImageAnnotator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imageUrl: { control: 'text' },
    altText: { control: 'text' },
    annotations: { control: 'object' },
  },
};

const Template = (args) => <ImageAnnotator {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://example.com/sample-image.jpg',
  altText: 'Sample Image',
  annotations: [
    { x: 10, y: 20, text: 'Annotation 1' },
    { x: 30, y: 50, text: 'Annotation 2' },
  ],
};

export const NoAnnotations = Template.bind({});
NoAnnotations.args = {
  imageUrl: 'https://example.com/sample-image.jpg',
  altText: 'Sample Image',
  annotations: [],
};

export const MultipleAnnotations = Template.bind({});
MultipleAnnotations.args = {
  imageUrl: 'https://example.com/sample-image.jpg',
  altText: 'Sample Image',
  annotations: [
    { x: 10, y: 20, text: 'Annotation 1' },
    { x: 30, y: 50, text: 'Annotation 2' },
    { x: 60, y: 80, text: 'Annotation 3' },
  ],
};