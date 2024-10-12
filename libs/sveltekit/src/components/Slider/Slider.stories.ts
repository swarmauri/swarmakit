import Slider from './Slider.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Input/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['min', 'max', 'disabled'],
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    value: {
      control: { type: 'number' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: Slider,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'min',
  min: 0,
  max: 100,
  value: 0,
};

export const Min = Template.bind({});
Min.args = {
  state: 'min',
  min: 0,
  max: 100,
  value: 0,
};

export const Max = Template.bind({});
Max.args = {
  state: 'max',
  min: 0,
  max: 100,
  value: 100,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  min: 0,
  max: 100,
  value: 50,
};