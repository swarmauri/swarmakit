import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Media/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: ['path/to/image1.jpg', 'path/to/image2.jpg', 'path/to/image3.jpg'],
  autoPlayInterval: 3000,
};

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  ...Default.args,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  autoPlayInterval: 0,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  activeIndex: 1,
};