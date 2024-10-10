import React from 'react';
import MediaGallery from './MediaGallery';

export default {
  title: 'Media/MediaGallery',
  component: MediaGallery,
};

const Template = (args) => <MediaGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://www.example.com/image1.jpg',
    'https://www.example.com/image2.jpg',
    'https://www.example.com/image3.jpg',
  ],
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  ...Default.args,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
};

export const Slideshow = Template.bind({});
Slideshow.args = {
  ...Default.args,
};

export const ZoomInOut = Template.bind({});
ZoomInOut.args = {
  ...Default.args,
};

export const NextPrevious = Template.bind({});
NextPrevious.args = {
  ...Default.args,
};