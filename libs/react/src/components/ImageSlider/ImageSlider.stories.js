import React from 'react';
import ImageSlider from './ImageSlider';

export default {
  title: 'Media/ImageSlider',
  component: ImageSlider,
};

const Template = (args) => <ImageSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ],
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...Default.args,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};