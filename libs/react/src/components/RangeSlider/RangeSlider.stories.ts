import React from 'react';
import { Meta, Story } from '@storybook/react';
import RangeSlider from './RangeSlider';

export default {
  title: 'component/Forms/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <RangeSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  disabled: false,
  labelPosition: 'left',
  onChange: (value: number) => console.log(value),
};

export const Min = Template.bind({});
Min.args = {
  ...Default.args,
  value: 0,
};

export const Max = Template.bind({});
Max.args = {
  ...Default.args,
  value: 100,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};