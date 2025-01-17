import React from 'react';
import { Meta, Story } from '@storybook/react';
import ImageSlider, { ImageSliderProps } from './ImageSlider';

export default {
  title: 'component/Media/ImageSlider',
  component: ImageSlider,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ImageSliderProps> = (args) => <ImageSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
  ],
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};

export const Inactive = Template.bind({});
Inactive.args = {
  images: [],
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};