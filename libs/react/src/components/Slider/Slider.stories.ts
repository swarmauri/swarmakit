import React from 'react';
import { Meta, Story } from '@storybook/react';
import Slider from './Slider';

export default {
  title: 'component/Input/Slider',
  component: Slider,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  value: 50,
  disabled: false,
};

export const Min = Template.bind({});
Min.args = {
  min: 0,
  max: 100,
  value: 0,
  disabled: false,
};

export const Max = Template.bind({});
Max.args = {
  min: 0,
  max: 100,
  value: 100,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 100,
  value: 50,
  disabled: true,
};