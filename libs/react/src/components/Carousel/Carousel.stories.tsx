import React from 'react';
import { Meta, Story } from '@storybook/react';
import Carousel, { CarouselProps } from './Carousel';

export default {
  title: 'component/Media/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
  autoPlay: false,
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
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};