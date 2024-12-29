import React from 'react';
import { Meta, Story } from '@storybook/react';
import MediaGallery, { MediaGalleryProps } from './MediaGallery';

export default {
  title: 'component/Media/MediaGallery',
  component: MediaGallery,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MediaGalleryProps> = (args) => <MediaGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://www.example.com/image1.jpg',
    'https://www.example.com/image2.jpg',
    'https://www.example.com/image3.jpg',
  ],
  initialIndex: 0,
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  ...Default.args,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  initialIndex: 1,
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