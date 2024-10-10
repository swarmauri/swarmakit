import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Media/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
  autoPlay: true,
  interval: 3000,
};

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  ...Default.args,
  autoPlay: true,
};

export const Paused = Template.bind({});
Paused.args = {
  ...Default.args,
  autoPlay: false,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  autoPlay: true,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  autoPlay: true,
};